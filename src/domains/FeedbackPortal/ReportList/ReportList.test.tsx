/* eslint-disable @typescript-eslint/require-await */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import faker from 'faker';

import ReactEndpointContext from '../Contexts/ReportEndpointContext';
import { makeBugReport } from '../reportMaker';
import ReportList from './ReportList';
import * as API from '../api/api';
import { BugReportForm } from '../types';

jest.mock('hooks/useSnack');

describe('CreateReportList', () => {
    const dummyBugReport = makeBugReport();
    const customEndpoints = {
        submitEndpoint: (form: BugReportForm) => API.updateBugReport(form),
        deleteEndpoint: (_id: string) => API.deleteBugReport(_id),
    };
    let container: HTMLDivElement | null = null;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        if (container) {
            unmountComponentAtNode(container);
            container.remove();
        }
        container = null;
        jest.restoreAllMocks();
    });

    // eslint-disable-next-line jest/expect-expect
    it('should render report list', async () => {
        ReactTestUtils.act(() => {
            render(
                <ReactEndpointContext.Provider value={customEndpoints}>
                    <ReportList reports={[dummyBugReport]} />
                </ReactEndpointContext.Provider>,
                container
            );
        });
    });

    it('should render and open dialog', async () => {
        const newDescription = faker.lorem.paragraph();

        ReactTestUtils.act(() => {
            render(
                <ReactEndpointContext.Provider value={customEndpoints}>
                    <ReportList reports={[dummyBugReport]} />
                </ReactEndpointContext.Provider>,
                container
            );
        });

        const ListItemNode = document.querySelector(
            `#${dummyBugReport._id}`
        ) as HTMLInputElement;

        // Open Dialog with Report Summary
        ReactTestUtils.act(() => {
            ListItemNode.dispatchEvent(
                new MouseEvent('click', { bubbles: true })
            );
        });

        // Get report description`
        const reportDescriptionNode = document.querySelector(
            '#reportDescription'
        ) as HTMLInputElement;

        expect(reportDescriptionNode.value).toBe(dummyBugReport.description);

        // Update Report summary from the dialog
        ReactTestUtils.act(() => {
            ReactTestUtils.Simulate.change(reportDescriptionNode, {
                target: ({ value: newDescription } as unknown) as EventTarget,
            });
        });

        expect(reportDescriptionNode.value).toBe(newDescription);
    });
});
