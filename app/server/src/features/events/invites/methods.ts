import { PrismaClient } from '@local/__generated__/prisma';
import { errors } from '@local/features/utils';
import { CreateInvite } from '@local/graphql-types';
import { register } from '@local/features/accounts/methods';
import { fromGlobalId } from 'graphql-relay';
import { verify, sign } from '@local/lib/jwt';

import { sendInviteEmail } from './invite';
import { canUserModify } from '../methods';

export async function invite(viewerId: string, prisma: PrismaClient, { email, eventId }: CreateInvite) {
    // Check if event exists
    const { id: globalEventId } = fromGlobalId(eventId);
    const queryResult = await prisma.event.findUnique({ where: { id: globalEventId } });
    if (!queryResult) throw new Error('Event not found');

    // Check if viewer has permission to invite
    if (!canUserModify(viewerId, globalEventId, prisma)) throw new Error(errors.permissions);

    // check if email already exists
    let userResult = await prisma.user.findFirst({ where: { email } });

    // create user if email is not in accounts system
    let invitedUserId = userResult?.id;
    if (!invitedUserId) {
        userResult = await register(prisma, { email });
        invitedUserId = userResult.id;
    }

    // Sign token
    const token = await sign({ eventId, invitedUserId }); // TODO: expire at some point

    // Send Email
    return sendInviteEmail(
        queryResult.title,
        eventId,
        queryResult.startDateTime,
        queryResult.endDateTime,
        email,
        token
    );
}

// FIXME:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function validateInvite(token: string, eventId: string, prisma: PrismaClient) {
    const result = (await verify(token)) as { eventId: string; invitedUserId: string };
    if (!result.eventId) return { valid: false };
    const { id: tokenEventId } = fromGlobalId(result.eventId);

    // Ensure token is being used for the correct event
    if (eventId !== tokenEventId) return { valid: false };
    return { valid: true };
}
