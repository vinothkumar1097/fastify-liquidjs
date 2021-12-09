const { getSpeechToken } = require('../controllers/chat');

const speechTokenOpts = {
    handler: getSpeechToken
}
const chatOpts = {
    handler: (req, res) => {
        var card = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.0",
            "body": [
                {
                "type": "TextBlock",
                "text": "Present a form and submit it back to the originator"
                },
                {
                "type": "Input.Text",
                "id": "firstName",
                "placeholder": "What is your first name?"
                },
                {
                "type": "Input.Text",
                "id": "lastName",
                "placeholder": "What is your last name?"
                }
            ],
            "actions": [
                {
                "type": "Action.Submit",
                "title": "Action.Submit",
                "data": {
                    "x": 13
                    }
                }
            ]
        };
        var card2 = 
        {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.2",
            "body": [
                {
                    "type": "TextBlock",
                    "text": null,
                    "wrap": true,
                    "weight": "Bolder"
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "Container",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "HR",
                                            "height": "stretch",
                                            "fontType": "Default",
                                            "size": "Default",
                                            "weight": "Bolder",
                                            "color": "Accent",
                                            "maxLines": 0,
                                            "spacing": "Padding"
                                        }
                                    ],
                                    "minHeight": "20px",
                                    "height": "stretch"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Please select from the following options.",
                                    "wrap": true,
                                    "separator": true,
                                    "items": [
                                        {
                                            "type": "ColumnSet",
                                            "columns": [
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "Image",
                                                            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB80lEQVQ4jaWTP2/TQBjGH7++MzFy3I5YbtQk7ED6R2LvQil0rPoJCkNHhg4MNzB0YGQpfIKqC5SiZuELtGoavgBNFTtecWqBZd/5GCBS/rgD4lnudHqen96T3sfAmIQQdJmtbpucvShU8bDQhUMGJUTUzZU8WObnh0KIYjxjjC4beydNi7O2bdtereY7btUFtxiyXGIYxwj6YfIrTQdZLte/7D/7PgHY2Dtpcs4umo2663n3CLcojCLVu7q+UTpb+vxm8woASAhBFmftsnCFGxMA3/PMemOxahrWqRCCAIAus9Vt27a9svDumlsKse2K38lWtgCAiLGXtZrvTI+b5hrvvg6R5nrmKzXfdxjjOwBAuigeuFV3xrT56C5212bfAcCdn4PWaP0FaIdbbMZ03P1ZGgYAzhiKQjkAQAYZSZ7JW81lkrkEkZkAABFRNx7G/wT4MYxBhnEBAJQreRD0w2Ta9OrJ3MQ5ktZA0A8TqeQHAGDL/PzwW/pYhFF03/c8c2R82y6fahBFKk3ToMXPjj5hahPrjcXqOGRa4SBSvd71ELle+ri/3gPGuvD89XHDNKxT2674Cwu+M+/OgVsMeSYRxzH6QZikaRpInT0drfEEAPjTxk62ssWsOztaFa1CqSqZ5o1B6Cip3rf42dF0G/9bvwGo4c2MoQ2KpwAAAABJRU5ErkJggg==",
                                                            "width": "16px",
                                                            "height": "15px",
                                                            "horizontalAlignment": "Center"
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "spacing": "None",
                                                    "height": "stretch",
                                                    "verticalContentAlignment": "Center"
                                                },
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "TextBlock",
                                                            "spacing": "None",
                                                            "text": "**Leave Related**",
                                                            "wrap": true,
                                                            "fontType": "Default",
                                                            "weight": "Bolder",
                                                            "size": "Small",
                                                            "maxLines": 5
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "verticalContentAlignment": "Center",
                                                    "spacing": "Small"
                                                }
                                            ],
                                            "spacing": "Small",
                                            "separator": false,
                                            "selectAction": {
                                                "type": "Action.Submit",
                                                "data": {
                                                    "msteams": {
                                                        "type": "messageBack",
                                                        "displayText": "Leave Related",
                                                        "text": "FollowUpPrompt",
                                                        "value": "{\"isSuccess\": \"yes\"}"
                                                    },
                                                    "userContext": "FollowUpPrompt",
                                                    "intentCode": "hr",
                                                    "followUpQuestion": "Leave Related",
                                                    "lang": "en",
                                                    "originalQuestion": "Leave Related"
                                                }
                                            }
                                        },
                                        {
                                            "type": "ColumnSet",
                                            "columns": [
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "Image",
                                                            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB80lEQVQ4jaWTP2/TQBjGH7++MzFy3I5YbtQk7ED6R2LvQil0rPoJCkNHhg4MNzB0YGQpfIKqC5SiZuELtGoavgBNFTtecWqBZd/5GCBS/rgD4lnudHqen96T3sfAmIQQdJmtbpucvShU8bDQhUMGJUTUzZU8WObnh0KIYjxjjC4beydNi7O2bdtereY7btUFtxiyXGIYxwj6YfIrTQdZLte/7D/7PgHY2Dtpcs4umo2663n3CLcojCLVu7q+UTpb+vxm8woASAhBFmftsnCFGxMA3/PMemOxahrWqRCCAIAus9Vt27a9svDumlsKse2K38lWtgCAiLGXtZrvTI+b5hrvvg6R5nrmKzXfdxjjOwBAuigeuFV3xrT56C5212bfAcCdn4PWaP0FaIdbbMZ03P1ZGgYAzhiKQjkAQAYZSZ7JW81lkrkEkZkAABFRNx7G/wT4MYxBhnEBAJQreRD0w2Ta9OrJ3MQ5ktZA0A8TqeQHAGDL/PzwW/pYhFF03/c8c2R82y6fahBFKk3ToMXPjj5hahPrjcXqOGRa4SBSvd71ELle+ri/3gPGuvD89XHDNKxT2674Cwu+M+/OgVsMeSYRxzH6QZikaRpInT0drfEEAPjTxk62ssWsOztaFa1CqSqZ5o1B6Cip3rf42dF0G/9bvwGo4c2MoQ2KpwAAAABJRU5ErkJggg==",
                                                            "width": "16px",
                                                            "height": "15px",
                                                            "horizontalAlignment": "Center"
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "spacing": "None",
                                                    "height": "stretch",
                                                    "verticalContentAlignment": "Center"
                                                },
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "TextBlock",
                                                            "spacing": "None",
                                                            "text": "**Compensation & Benefits**",
                                                            "wrap": true,
                                                            "fontType": "Default",
                                                            "weight": "Bolder",
                                                            "size": "Small",
                                                            "maxLines": 5
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "verticalContentAlignment": "Center",
                                                    "spacing": "Small"
                                                }
                                            ],
                                            "spacing": "Small",
                                            "separator": false,
                                            "selectAction": {
                                                "type": "Action.Submit",
                                                "data": {
                                                    "msteams": {
                                                        "type": "messageBack",
                                                        "displayText": "Compensation & Benefits",
                                                        "text": "FollowUpPrompt",
                                                        "value": "{\"isSuccess\": \"yes\"}"
                                                    },
                                                    "userContext": "FollowUpPrompt",
                                                    "intentCode": "hr",
                                                    "followUpQuestion": "Compensation & Benefits",
                                                    "lang": "en",
                                                    "originalQuestion": "Compensation & Benefits"
                                                }
                                            }
                                        },
                                        {
                                            "type": "ColumnSet",
                                            "columns": [
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "Image",
                                                            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB80lEQVQ4jaWTP2/TQBjGH7++MzFy3I5YbtQk7ED6R2LvQil0rPoJCkNHhg4MNzB0YGQpfIKqC5SiZuELtGoavgBNFTtecWqBZd/5GCBS/rgD4lnudHqen96T3sfAmIQQdJmtbpucvShU8bDQhUMGJUTUzZU8WObnh0KIYjxjjC4beydNi7O2bdtereY7btUFtxiyXGIYxwj6YfIrTQdZLte/7D/7PgHY2Dtpcs4umo2663n3CLcojCLVu7q+UTpb+vxm8woASAhBFmftsnCFGxMA3/PMemOxahrWqRCCAIAus9Vt27a9svDumlsKse2K38lWtgCAiLGXtZrvTI+b5hrvvg6R5nrmKzXfdxjjOwBAuigeuFV3xrT56C5212bfAcCdn4PWaP0FaIdbbMZ03P1ZGgYAzhiKQjkAQAYZSZ7JW81lkrkEkZkAABFRNx7G/wT4MYxBhnEBAJQreRD0w2Ta9OrJ3MQ5ktZA0A8TqeQHAGDL/PzwW/pYhFF03/c8c2R82y6fahBFKk3ToMXPjj5hahPrjcXqOGRa4SBSvd71ELle+ri/3gPGuvD89XHDNKxT2674Cwu+M+/OgVsMeSYRxzH6QZikaRpInT0drfEEAPjTxk62ssWsOztaFa1CqSqZ5o1B6Cip3rf42dF0G/9bvwGo4c2MoQ2KpwAAAABJRU5ErkJggg==",
                                                            "width": "16px",
                                                            "height": "15px",
                                                            "horizontalAlignment": "Center"
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "spacing": "None",
                                                    "height": "stretch",
                                                    "verticalContentAlignment": "Center"
                                                },
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "TextBlock",
                                                            "spacing": "None",
                                                            "text": "**Employee Services**",
                                                            "wrap": true,
                                                            "fontType": "Default",
                                                            "weight": "Bolder",
                                                            "size": "Small",
                                                            "maxLines": 5
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "verticalContentAlignment": "Center",
                                                    "spacing": "Small"
                                                }
                                            ],
                                            "spacing": "Small",
                                            "separator": false,
                                            "selectAction": {
                                                "type": "Action.Submit",
                                                "data": {
                                                    "msteams": {
                                                        "type": "messageBack",
                                                        "displayText": "Employee Services",
                                                        "text": "FollowUpPrompt",
                                                        "value": "{\"isSuccess\": \"yes\"}"
                                                    },
                                                    "userContext": "FollowUpPrompt",
                                                    "intentCode": "hr",
                                                    "followUpQuestion": "Employee Services",
                                                    "lang": "en",
                                                    "originalQuestion": "Employee Services"
                                                }
                                            }
                                        },
                                        {
                                            "type": "ColumnSet",
                                            "columns": [
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "Image",
                                                            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB80lEQVQ4jaWTP2/TQBjGH7++MzFy3I5YbtQk7ED6R2LvQil0rPoJCkNHhg4MNzB0YGQpfIKqC5SiZuELtGoavgBNFTtecWqBZd/5GCBS/rgD4lnudHqen96T3sfAmIQQdJmtbpucvShU8bDQhUMGJUTUzZU8WObnh0KIYjxjjC4beydNi7O2bdtereY7btUFtxiyXGIYxwj6YfIrTQdZLte/7D/7PgHY2Dtpcs4umo2663n3CLcojCLVu7q+UTpb+vxm8woASAhBFmftsnCFGxMA3/PMemOxahrWqRCCAIAus9Vt27a9svDumlsKse2K38lWtgCAiLGXtZrvTI+b5hrvvg6R5nrmKzXfdxjjOwBAuigeuFV3xrT56C5212bfAcCdn4PWaP0FaIdbbMZ03P1ZGgYAzhiKQjkAQAYZSZ7JW81lkrkEkZkAABFRNx7G/wT4MYxBhnEBAJQreRD0w2Ta9OrJ3MQ5ktZA0A8TqeQHAGDL/PzwW/pYhFF03/c8c2R82y6fahBFKk3ToMXPjj5hahPrjcXqOGRa4SBSvd71ELle+ri/3gPGuvD89XHDNKxT2674Cwu+M+/OgVsMeSYRxzH6QZikaRpInT0drfEEAPjTxk62ssWsOztaFa1CqSqZ5o1B6Cip3rf42dF0G/9bvwGo4c2MoQ2KpwAAAABJRU5ErkJggg==",
                                                            "width": "16px",
                                                            "height": "15px",
                                                            "horizontalAlignment": "Center"
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "spacing": "None",
                                                    "height": "stretch",
                                                    "verticalContentAlignment": "Center"
                                                },
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "TextBlock",
                                                            "spacing": "None",
                                                            "text": "**Employees Provident Fund - PF**",
                                                            "wrap": true,
                                                            "fontType": "Default",
                                                            "weight": "Bolder",
                                                            "size": "Small",
                                                            "maxLines": 5
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "verticalContentAlignment": "Center",
                                                    "spacing": "Small"
                                                }
                                            ],
                                            "spacing": "Small",
                                            "separator": false,
                                            "selectAction": {
                                                "type": "Action.Submit",
                                                "data": {
                                                    "msteams": {
                                                        "type": "messageBack",
                                                        "displayText": "Employees Provident Fund - PF",
                                                        "text": "FollowUpPrompt",
                                                        "value": "{\"isSuccess\": \"yes\"}"
                                                    },
                                                    "userContext": "FollowUpPrompt",
                                                    "intentCode": "hr",
                                                    "followUpQuestion": "Employees Provident Fund - PF",
                                                    "lang": "en",
                                                    "originalQuestion": "Employees Provident Fund - PF"
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "Container",
                                    "items": [
                                        {
                                            "type": "ColumnSet",
                                            "columns": [
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "Image",
                                                            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB80lEQVQ4jaWTP2/TQBjGH7++MzFy3I5YbtQk7ED6R2LvQil0rPoJCkNHhg4MNzB0YGQpfIKqC5SiZuELtGoavgBNFTtecWqBZd/5GCBS/rgD4lnudHqen96T3sfAmIQQdJmtbpucvShU8bDQhUMGJUTUzZU8WObnh0KIYjxjjC4beydNi7O2bdtereY7btUFtxiyXGIYxwj6YfIrTQdZLte/7D/7PgHY2Dtpcs4umo2663n3CLcojCLVu7q+UTpb+vxm8woASAhBFmftsnCFGxMA3/PMemOxahrWqRCCAIAus9Vt27a9svDumlsKse2K38lWtgCAiLGXtZrvTI+b5hrvvg6R5nrmKzXfdxjjOwBAuigeuFV3xrT56C5212bfAcCdn4PWaP0FaIdbbMZ03P1ZGgYAzhiKQjkAQAYZSZ7JW81lkrkEkZkAABFRNx7G/wT4MYxBhnEBAJQreRD0w2Ta9OrJ3MQ5ktZA0A8TqeQHAGDL/PzwW/pYhFF03/c8c2R82y6fahBFKk3ToMXPjj5hahPrjcXqOGRa4SBSvd71ELle+ri/3gPGuvD89XHDNKxT2674Cwu+M+/OgVsMeSYRxzH6QZikaRpInT0drfEEAPjTxk62ssWsOztaFa1CqSqZ5o1B6Cip3rf42dF0G/9bvwGo4c2MoQ2KpwAAAABJRU5ErkJggg==",
                                                            "width": "16px",
                                                            "height": "15px",
                                                            "horizontalAlignment": "Center"
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "spacing": "None",
                                                    "height": "stretch",
                                                    "verticalContentAlignment": "Center"
                                                },
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "TextBlock",
                                                            "spacing": "None",
                                                            "text": "**Leave Related**",
                                                            "wrap": true,
                                                            "fontType": "Default",
                                                            "weight": "Bolder",
                                                            "size": "Small",
                                                            "maxLines": 5
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "verticalContentAlignment": "Center",
                                                    "spacing": "Small"
                                                }
                                            ],
                                            "spacing": "Small",
                                            "separator": false,
                                            "selectAction": {
                                                "type": "Action.Submit",
                                                "data": {
                                                    "msteams": {
                                                        "type": "messageBack",
                                                        "displayText": "Leave Related",
                                                        "text": "FollowUpPrompt",
                                                        "value": "{\"isSuccess\": \"yes\"}"
                                                    },
                                                    "userContext": "FollowUpPrompt",
                                                    "intentCode": "hr",
                                                    "followUpQuestion": "Leave Related",
                                                    "lang": "en",
                                                    "originalQuestion": "Leave Related"
                                                }
                                            }
                                        },
                                        {
                                            "type": "ColumnSet",
                                            "columns": [
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "Image",
                                                            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB80lEQVQ4jaWTP2/TQBjGH7++MzFy3I5YbtQk7ED6R2LvQil0rPoJCkNHhg4MNzB0YGQpfIKqC5SiZuELtGoavgBNFTtecWqBZd/5GCBS/rgD4lnudHqen96T3sfAmIQQdJmtbpucvShU8bDQhUMGJUTUzZU8WObnh0KIYjxjjC4beydNi7O2bdtereY7btUFtxiyXGIYxwj6YfIrTQdZLte/7D/7PgHY2Dtpcs4umo2663n3CLcojCLVu7q+UTpb+vxm8woASAhBFmftsnCFGxMA3/PMemOxahrWqRCCAIAus9Vt27a9svDumlsKse2K38lWtgCAiLGXtZrvTI+b5hrvvg6R5nrmKzXfdxjjOwBAuigeuFV3xrT56C5212bfAcCdn4PWaP0FaIdbbMZ03P1ZGgYAzhiKQjkAQAYZSZ7JW81lkrkEkZkAABFRNx7G/wT4MYxBhnEBAJQreRD0w2Ta9OrJ3MQ5ktZA0A8TqeQHAGDL/PzwW/pYhFF03/c8c2R82y6fahBFKk3ToMXPjj5hahPrjcXqOGRa4SBSvd71ELle+ri/3gPGuvD89XHDNKxT2674Cwu+M+/OgVsMeSYRxzH6QZikaRpInT0drfEEAPjTxk62ssWsOztaFa1CqSqZ5o1B6Cip3rf42dF0G/9bvwGo4c2MoQ2KpwAAAABJRU5ErkJggg==",
                                                            "width": "16px",
                                                            "height": "15px",
                                                            "horizontalAlignment": "Center"
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "spacing": "None",
                                                    "height": "stretch",
                                                    "verticalContentAlignment": "Center"
                                                },
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "TextBlock",
                                                            "spacing": "None",
                                                            "text": "**Compensation & Benefits**",
                                                            "wrap": true,
                                                            "fontType": "Default",
                                                            "weight": "Bolder",
                                                            "size": "Small",
                                                            "maxLines": 5
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "verticalContentAlignment": "Center",
                                                    "spacing": "Small"
                                                }
                                            ],
                                            "spacing": "Small",
                                            "separator": false,
                                            "selectAction": {
                                                "type": "Action.Submit",
                                                "data": {
                                                    "msteams": {
                                                        "type": "messageBack",
                                                        "displayText": "Compensation & Benefits",
                                                        "text": "FollowUpPrompt",
                                                        "value": "{\"isSuccess\": \"yes\"}"
                                                    },
                                                    "userContext": "FollowUpPrompt",
                                                    "intentCode": "hr",
                                                    "followUpQuestion": "Compensation & Benefits",
                                                    "lang": "en",
                                                    "originalQuestion": "Compensation & Benefits"
                                                }
                                            }
                                        },
                                        {
                                            "type": "ColumnSet",
                                            "columns": [
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "Image",
                                                            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB80lEQVQ4jaWTP2/TQBjGH7++MzFy3I5YbtQk7ED6R2LvQil0rPoJCkNHhg4MNzB0YGQpfIKqC5SiZuELtGoavgBNFTtecWqBZd/5GCBS/rgD4lnudHqen96T3sfAmIQQdJmtbpucvShU8bDQhUMGJUTUzZU8WObnh0KIYjxjjC4beydNi7O2bdtereY7btUFtxiyXGIYxwj6YfIrTQdZLte/7D/7PgHY2Dtpcs4umo2663n3CLcojCLVu7q+UTpb+vxm8woASAhBFmftsnCFGxMA3/PMemOxahrWqRCCAIAus9Vt27a9svDumlsKse2K38lWtgCAiLGXtZrvTI+b5hrvvg6R5nrmKzXfdxjjOwBAuigeuFV3xrT56C5212bfAcCdn4PWaP0FaIdbbMZ03P1ZGgYAzhiKQjkAQAYZSZ7JW81lkrkEkZkAABFRNx7G/wT4MYxBhnEBAJQreRD0w2Ta9OrJ3MQ5ktZA0A8TqeQHAGDL/PzwW/pYhFF03/c8c2R82y6fahBFKk3ToMXPjj5hahPrjcXqOGRa4SBSvd71ELle+ri/3gPGuvD89XHDNKxT2674Cwu+M+/OgVsMeSYRxzH6QZikaRpInT0drfEEAPjTxk62ssWsOztaFa1CqSqZ5o1B6Cip3rf42dF0G/9bvwGo4c2MoQ2KpwAAAABJRU5ErkJggg==",
                                                            "width": "16px",
                                                            "height": "15px",
                                                            "horizontalAlignment": "Center"
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "spacing": "None",
                                                    "height": "stretch",
                                                    "verticalContentAlignment": "Center"
                                                },
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "TextBlock",
                                                            "spacing": "None",
                                                            "text": "**Employee Services**",
                                                            "wrap": true,
                                                            "fontType": "Default",
                                                            "weight": "Bolder",
                                                            "size": "Small",
                                                            "maxLines": 5
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "verticalContentAlignment": "Center",
                                                    "spacing": "Small"
                                                }
                                            ],
                                            "spacing": "Small",
                                            "separator": false,
                                            "selectAction": {
                                                "type": "Action.Submit",
                                                "data": {
                                                    "msteams": {
                                                        "type": "messageBack",
                                                        "displayText": "Employee Services",
                                                        "text": "FollowUpPrompt",
                                                        "value": "{\"isSuccess\": \"yes\"}"
                                                    },
                                                    "userContext": "FollowUpPrompt",
                                                    "intentCode": "hr",
                                                    "followUpQuestion": "Employee Services",
                                                    "lang": "en",
                                                    "originalQuestion": "Employee Services"
                                                }
                                            }
                                        },
                                        {
                                            "type": "ColumnSet",
                                            "columns": [
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "Image",
                                                            "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB80lEQVQ4jaWTP2/TQBjGH7++MzFy3I5YbtQk7ED6R2LvQil0rPoJCkNHhg4MNzB0YGQpfIKqC5SiZuELtGoavgBNFTtecWqBZd/5GCBS/rgD4lnudHqen96T3sfAmIQQdJmtbpucvShU8bDQhUMGJUTUzZU8WObnh0KIYjxjjC4beydNi7O2bdtereY7btUFtxiyXGIYxwj6YfIrTQdZLte/7D/7PgHY2Dtpcs4umo2663n3CLcojCLVu7q+UTpb+vxm8woASAhBFmftsnCFGxMA3/PMemOxahrWqRCCAIAus9Vt27a9svDumlsKse2K38lWtgCAiLGXtZrvTI+b5hrvvg6R5nrmKzXfdxjjOwBAuigeuFV3xrT56C5212bfAcCdn4PWaP0FaIdbbMZ03P1ZGgYAzhiKQjkAQAYZSZ7JW81lkrkEkZkAABFRNx7G/wT4MYxBhnEBAJQreRD0w2Ta9OrJ3MQ5ktZA0A8TqeQHAGDL/PzwW/pYhFF03/c8c2R82y6fahBFKk3ToMXPjj5hahPrjcXqOGRa4SBSvd71ELle+ri/3gPGuvD89XHDNKxT2674Cwu+M+/OgVsMeSYRxzH6QZikaRpInT0drfEEAPjTxk62ssWsOztaFa1CqSqZ5o1B6Cip3rf42dF0G/9bvwGo4c2MoQ2KpwAAAABJRU5ErkJggg==",
                                                            "width": "16px",
                                                            "height": "15px",
                                                            "horizontalAlignment": "Center"
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "spacing": "None",
                                                    "height": "stretch",
                                                    "verticalContentAlignment": "Center"
                                                },
                                                {
                                                    "type": "Column",
                                                    "items": [
                                                        {
                                                            "type": "TextBlock",
                                                            "spacing": "None",
                                                            "text": "**Employees Provident Fund - PF**",
                                                            "wrap": true,
                                                            "fontType": "Default",
                                                            "weight": "Bolder",
                                                            "size": "Small",
                                                            "maxLines": 5
                                                        }
                                                    ],
                                                    "width": "auto",
                                                    "verticalContentAlignment": "Center",
                                                    "spacing": "Small"
                                                }
                                            ],
                                            "spacing": "Small",
                                            "separator": false,
                                            "selectAction": {
                                                "type": "Action.Submit",
                                                "data": {
                                                    "msteams": {
                                                        "type": "messageBack",
                                                        "displayText": "Employees Provident Fund - PF",
                                                        "text": "FollowUpPrompt",
                                                        "value": "{\"isSuccess\": \"yes\"}"
                                                    },
                                                    "userContext": "FollowUpPrompt",
                                                    "intentCode": "hr",
                                                    "followUpQuestion": "Employees Provident Fund - PF",
                                                    "lang": "en",
                                                    "originalQuestion": "Employees Provident Fund - PF"
                                                }
                                            }
                                        }
                                    ],
                                    "separator": true
                                },
                                {
                                    "type": "ColumnSet",
                                    "columns": [
                                        {
                                            "type": "Column",
                                            "width": "auto",
                                            "items": [
                                                {
                                                    "type": "ActionSet",
                                                    "actions": [
                                                        {
                                                            "type": "Action.Submit",
                                                            "title": "Filter",
                                                            "data": {
                                                                "msteams": {
                                                                    "type": "messageBack",
                                                                    "displayText": "Filter",
                                                                    "text": "Filter Applied",
                                                                    "value": "{\"isSuccess\": \"yes\"}"
                                                                },
                                                                "userContext": "Filter Applied",
                                                                "intentName": "HR",
                                                                "intentCode": "hr"
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "Column",
                                            "width": "auto",
                                            "items": [
                                                {
                                                    "type": "ActionSet",
                                                    "actions": [
                                                        {
                                                            "type": "Action.Submit",
                                                            "title": "Share Feedback",
                                                            "data": {
                                                                "msteams": {
                                                                    "type": "messageBack",
                                                                    "displayText": "Share Feedback",
                                                                    "text": "Feedback",
                                                                    "value": "{\"isSuccess\": \"yes\"}"
                                                                },
                                                                "userContext": "Feedback",
                                                                "intentName": "HR",
                                                                "intentCode": "hr",
                                                                "question": "hr related faqs",
                                                                "qnaAnswer": "Please select from the following options.",
                                                                "qnaId": 140
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    "separator": true
                                }
                            ],
                            "separator": true,
                            "minHeight": "0px",
                            "style": "default"
                        }
                    ]
                }
            ],
            "msteams": {
                "width": "Full"
            }
        }
        var card3 = 
        {
            "type": "message",
            "attachmentLayout": "carousel",
            "attachments": [
                {
                    "contentType": "application/vnd.microsoft.card.adaptive",
                    "content": {
                        "type": "AdaptiveCard",
                        "body": [
                            {
                                "type": "TextBlock",
                                "text": "Ask a question",
                                "height": "stretch",
                                "fontType": "Default",
                                "size": "Medium",
                                "weight": "Bolder",
                                "color": "Accent",
                                "spacing": "Padding"
                            },
                            {
                                "type": "Image",
                                "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1AAA",
                                "size": "Large",
                                "horizontalAlignment": "Center",
                                "width": "420px",
                                "height": "200px"
                            },
                            {
                                "type": "TextBlock",
                                "text": "You can ask me anything related to Finance domains. Try add some keywords to describe what you are looking for.", 
                                "size": "Default",
                                "wrap": true,
                                "maxLines": 5
                            }
                        ],
                        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                        "version": "1.2"
                    }
                }
            ],
            "inputHint": "acceptingInput"
        }
        var card4 = 
        {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.2",
            "body": [
                {
                    "type": "TextBlock",
                    "text": null,
                    "wrap": true,
                    "weight": "Bolder"
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "Container",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "[Procurement](https://sp2013.myatos.net/organization/gf/pu/Pages/HomePage.aspx)",
                                            "height": "stretch",
                                            "fontType": "Default",
                                            "size": "Default",
                                            "weight": "Bolder",
                                            "color": "Accent",
                                            "maxLines": 0,
                                            "spacing": "Padding"
                                        }
                                    ],
                                    "minHeight": "20px",
                                    "height": "stretch"
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "செயலி 1 ஐ செயல்படுத்துகிறது:\n\nபடி 1 - உங்கள் சாதனத்தில் உள்ள பயன்பாட்டு ஸ்டோரிலிருந்து அரிபா மொபைல் வாங்குபவர் பயன்பாட்டைப் பதிவிறக்கவும்\n\nபடி 2 - உங்கள் சாதனத்தில் திரையில் காட்டப்பட்டுள்ள படிநிலைகளை பின்பற்றவும்\n\nபடி 3 - மேலே அடையாளம் காணப்பட்டபடி செயல்படுத்தும் குறியீட்டை ஒதுக்கவும்\n\nபடி 4 - பயன்பாடு செயலில் உள்ளது மற்றும் நீங்கள் செல்ல நல்லது.",
                                    "wrap": true,
                                    "separator": true
                                },
                                {
                                    "type": "TextBlock",
                                    "text": "Attachments",
                                    "weight": "Bolder",
                                    "color": "Accent",
                                    "spacing": "Small",
                                    "size": "Small",
                                    "separator": false
                                },
                                {
                                    "type": "FactSet",
                                    "facts": [
                                        {
                                            "title": "-",
                                            "value": "[83.jpg](https://storagerpacoedevsiri.blob.core.windows.net/assets/procurement/83.jpg)"
                                        }
                                    ],
                                    "spacing": "Small"
                                },
                                {
                                    "type": "ColumnSet",
                                    "columns": [
                                        {
                                            "type": "Column",
                                            "width": "auto",
                                            "items": [
                                                {
                                                    "type": "ActionSet",
                                                    "actions": [
                                                        {
                                                            "type": "Action.Submit",
                                                            "title": "வடிகட்டும் அமைவு",
                                                            "data": {
                                                                "msteams": {
                                                                    "type": "messageBack",
                                                                    "displayText": "வடிகட்டும் அமைவு",
                                                                    "text": "Filter Applied",
                                                                    "value": "{\"isSuccess\": \"yes\"}"
                                                                },
                                                                "userContext": "Filter Applied",
                                                                "intentName": "Procurement",
                                                                "intentCode": "procure"
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "Column",
                                            "width": "auto",
                                            "items": [
                                                {
                                                    "type": "ActionSet",
                                                    "actions": [
                                                        {
                                                            "type": "Action.Submit",
                                                            "title": "கருத்து பகிர்",
                                                            "data": {
                                                                "msteams": {
                                                                    "type": "messageBack",
                                                                    "displayText": "கருத்து பகிர்",
                                                                    "text": "Feedback",
                                                                    "value": "{\"isSuccess\": \"yes\"}"
                                                                },
                                                                "userContext": "Feedback",
                                                                "intentName": "Procurement",
                                                                "intentCode": "procure",
                                                                "question": "How to activate Ariba Mobile",
                                                                "qnaAnswer": "Activating the App 1 :\n\nStep 1 - Download Ariba Mobile Buyer app from the app store on your device\n\nStep 2 - Follow the steps as displayed on screen on your device\n\nStep 3 - Assign activation code as identified above\n\nStep 4 - App is active and you are good to go.",
                                                                "qnaId": 20
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    "separator": true
                                }
                            ],
                            "separator": true,
                            "minHeight": "0px",
                            "style": "default"
                        }
                    ]
                }
            ],
            "msteams": {
                "width": "Full"
            }
        }
        res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        console.log(req.body)
        // console.log(JSON.stringify(req.body['userContext'], null, 4));
        res.send(JSON.stringify(card4))
    }
}

function chatRoutes(fastify, options, next) {
    fastify.get('/api/get-speech-token', speechTokenOpts)
    fastify.post('/api/getData', chatOpts)
    next();
}

module.exports = chatRoutes;