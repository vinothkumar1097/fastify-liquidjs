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
        res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        console.log(req.body)
        // console.log(JSON.stringify(req.body['userContext'], null, 4));
        res.send(JSON.stringify(card2))
    }
}

function chatRoutes(fastify, options, next) {
    fastify.get('/api/get-speech-token', speechTokenOpts)
    fastify.post('/api/getData', chatOpts)
    next();
}

module.exports = chatRoutes;