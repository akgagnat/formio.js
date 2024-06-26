export default {
    _id: '65b119c4414257179284c2b4',
    type: 'form',
    tags: [],
    owner: '5e05a6b7549cdc2ece30c6b0',
    components: [
    {
        label: 'Edit Grid',
        openWhenEmpty: true,
        tableView: false,
        rowDrafts: false,
        key: 'editGrid',
        type: 'editgrid',
        input: true,
        components: [
            {
                label: 'Text Field',
                applyMaskOn: 'change',
                tableView: true,
                validate: { required: true },
                key: 'textField',
                type: 'textfield',
                input: true
            },
            {
                label: 'Text Area',
                applyMaskOn: 'change',
                autoExpand: false,
                tableView: true,
                key: 'textArea',
                type: 'textarea',
                input: true
            }
        ]
    },
    {
        type: 'button',
        label: 'Submit',
        key: 'submit',
        input: true,
        tableView: false,
        showValidations: false,
    }
    ],
    controller: '',
    revisions: '',
    _vid: 0,
    title: 'Edit Grid',
    display: 'form',
    access: [
        {
            roles: [
            '5e96e79ee1c3ad3178454100',
            '5e96e79ee1c3ad3178454101',
            '5e96e79ee1c3ad3178454102'
            ],
            type: 'read_all'
        }
    ],
    submissionAccess: [],
    settings: {},
    properties: {},
    name: 'editGrid',
    path: 'editgrid',
};
  
  