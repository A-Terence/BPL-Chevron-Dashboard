// Complete Chevron Asset Converter
// This script extracts all Chevron assets and converts them to the required format

const sourceData = {
  {
    "Items": [
        {
            "Id": "-4113903844032083200",
            "Name": "AF-Best Practices-Nigeria",
            "Registration": null,
            "Type": "dealer",
            "Selectable": 0,
            "Items": [
                {
                    "Id": "1631109543411613696",
                    "Name": "Africa - Best Practices - Chevron Nigeria Ltd",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "1864264040735379880",
                            "Name": "ABUJA",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "4403610376037213193",
                                    "Name": "ABUJA POOL",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "1672354367597944832",
                                            "Name": "HIACE_2017-AGL313EV-ABUJA",
                                            "Registration": "AGL313EV",
                                            "Type": "asset",
                                            "Selectable": 1
                                        },
                                        {
                                            "Id": "1672354859468169216",
                                            "Name": "LAND CRUISER_2021-LND588GZ-ABUJA",
                                            "Registration": "LNG588GZ",
                                            "Type": "asset",
                                            "Selectable": 1
                                        },
                                        {
                                            "Id": "1672800758960988160",
                                            "Name": "PRADO_2021-FZE14AK-ABUJA",
                                            "Registration": "FZE14AK",
                                            "Type": "asset",
                                            "Selectable": 1
                                        },
                                        {
                                            "Id": "1672354993690759168",
                                            "Name": "PRADO_2021-LND589GZ-ABUJA",
                                            "Registration": "LND589GZ",
                                            "Type": "asset",
                                            "Selectable": 1
                                        },
                                        {
                                            "Id": "1672801886603165696",
                                            "Name": "RAV4_2019-MUS744FQ-ABUJA",
                                            "Registration": "MUS744FQ",
                                            "Type": "asset",
                                            "Selectable": 1
                                        },
                                        {
                                            "Id": "1672801033461407744",
                                            "Name": "RAV4_2021-LSR816GY-ABUJA",
                                            "Registration": "LSR816GY",
                                            "Type": "asset",
                                            "Selectable": 1
                                        }
                                    ],
                                    "HyperMedia": {
                                        "Links": [],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "912885661057706529",
                                    "Name": "ABUJA SECURITY",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/912885661057706529/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "2132157327895089120",
                                    "Name": "ABUJA VIP/CMD",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/2132157327895089120/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "3834373571120869629",
                                    "Name": "ABUJA VIP/POOL",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/3834373571120869629/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-4989312111328426602",
                                    "Name": "CMD",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-4989312111328426602/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "7137450137020606335",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7137450137020606335/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "2701633175047749543",
                            "Name": "ESCRAVOS SHUTTLE",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2701633175047749543/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-1803510824048217435",
                            "Name": "LEKKI",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-1499415011533716146",
                                    "Name": "ASSIGNEE",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-1499415011533716146/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-6335940587686633512",
                                    "Name": "LEKKI ESTATE AND ER",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-6335940587686633512/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "1375452070248789428",
                                    "Name": "LEKKI LOANER VEHICLES",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/1375452070248789428/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "6409706025613540569",
                                    "Name": "LEKKI POOL",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/6409706025613540569/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-4286523977111823676",
                                    "Name": "LEKKI SCHOOL BUS",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-4286523977111823676/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-353646066701146559",
                                    "Name": "LEKKI SECURITY",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-353646066701146559/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-7319673374665910237",
                                    "Name": "LEKKI SECURITY GROUP II",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-7319673374665910237/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-5003768443143646753",
                                    "Name": "LEKKI STAFF BUS",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-5003768443143646753/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-4139478867639787138",
                                    "Name": "LEKKI VIP POOL",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-4139478867639787138/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "3744991227461719732",
                                    "Name": "MAINLAND POOL (AIRPORT)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/3744991227461719732/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "-2880577675376902852",
                            "Name": "PH",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-6542660610406658976",
                                    "Name": "PH OPERATION",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-6542660610406658976/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-252745080609622280",
                                    "Name": "PH SECURITY",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-252745080609622280/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "8574059662064970874",
                            "Name": "WARRI",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "4939818775356367284",
                                    "Name": "WARRI HAULAGE OPERATION",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/4939818775356367284/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-7482892357410543902",
                                    "Name": "WARRI MEDICAL",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-7482892357410543902/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "3382781801477189976",
                                    "Name": "Warri POOL",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/3382781801477189976/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-4841081282493548982",
                                    "Name": "WARRI SECURITY",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-4841081282493548982/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "5005292408959287878",
                                    "Name": "WARRI VIP POOL",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/5005292408959287878/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "Id": "4539313234099572635",
                    "Name": "Africa - Best Practices - Demo",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "4987683641788064298",
                            "Name": "ALTREN GLOBAL SERVICES LIMITED",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "5604431034201243258",
                                    "Name": "Dangote",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/5604431034201243258/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "842927424679078084",
                            "Name": "BEST PRACTICES",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/842927424679078084/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-2886784267019362363",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-2886784267019362363/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-2049450019304279435",
                            "Name": "Demo- Octavus Petroleum",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-2049450019304279435/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-4475225815567876397",
                            "Name": "Demo Site - DO NOT BILL",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-4475225815567876397/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-1490289783186112639",
                            "Name": "FANMILK",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1490289783186112639/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-385494047379791834",
                            "Name": "GPC",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-5753720122981959427",
                                    "Name": "GPC",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-5753720122981959427/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "2896295906104217500",
                            "Name": "JMG LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2896295906104217500/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-8343841683281375177",
                            "Name": "MIX 2310I Group",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-7251255173335276849",
                                    "Name": "LAOLU",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-7251255173335276849/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "8345466478030639278",
                                    "Name": "OSAZE",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/8345466478030639278/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "-4469758221182552293",
                            "Name": "OGUNWALE",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-93058393076641035",
                                    "Name": "OgunwaleSR",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-93058393076641035/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "211995437701425028",
                            "Name": "Ringardas Nigeria",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/211995437701425028/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "8767538987404410304",
                            "Name": "SHELL NIGERIA(DEMO)",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/8767538987404410304/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "4660393604198176413",
                            "Name": "SILVERFREIGHT TRANSPORT",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/4660393604198176413/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-1849874685959123090",
                            "Name": "TOTAL E n P (DEMO)",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1849874685959123090/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "2236726509146995167",
                            "Name": "UBER SERVICES",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2236726509146995167/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "6010207225975405233",
                            "Name": "Weatherford",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/6010207225975405233/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "5408457580978664575",
                            "Name": "XN - Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/5408457580978664575/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "-2775477494150753031",
                    "Name": "Africa - Best Practices - GE International Operations Nigeria Ltd",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "6073494796622945898",
                            "Name": "Abuja",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/6073494796622945898/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "1247313871889364346",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/1247313871889364346/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "7739507157832807479",
                            "Name": "Lagos",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7739507157832807479/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-1193838617571684111",
                            "Name": "Port Harcourt",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1193838617571684111/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "-1741758092856407951",
                    "Name": "Africa - Best Practices - GE International Operations Nigeria Ltd",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "6137293876684387227",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/6137293876684387227/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "7069806192466673519",
                            "Name": "XN-Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7069806192466673519/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "2712087723932397829",
                    "Name": "Africa - Best Practices - GE Medical Technologies Nigeria Ltd",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "1849509767812169542",
                            "Name": "Abuja",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/1849509767812169542/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-465289967197777583",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-465289967197777583/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "940424512911298778",
                            "Name": "Lagos",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/940424512911298778/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "-3427326957709610180",
                    "Name": "Africa - Best Practices - Great Brands Nigeria LTD",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "8676564914366904629",
                            "Name": "BA/BC",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/8676564914366904629/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-7506714233715537193",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-7506714233715537193/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "3843052806712600268",
                            "Name": "GBNL",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/3843052806712600268/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "1669909868914198325",
                            "Name": "XN-Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/1669909868914198325/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "1727128704886243328",
                    "Name": "Africa - Best Practices - JMG LIMITED",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "-2491710610586657803",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-2491710610586657803/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "5106037446643846807",
                    "Name": "Africa - Best Practices - LH Nigeria",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "-925586138618074843",
                            "Name": "Alternative Fuel & Raw-Materials",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-2189336755828154584",
                                    "Name": "REMBAM AFR",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-2189336755828154584/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "3499400291085993863",
                                    "Name": "Truluck AFR",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/3499400291085993863/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "-6265780509307003167",
                            "Name": "Arepo Installation in progress",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-6265780509307003167/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-3338194563949689796",
                            "Name": "Ashaka Loader driver",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "6181400075099219271",
                                    "Name": "Ashaka Loaders",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/6181400075099219271/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "3676309726736661781",
                            "Name": "Cement",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-915039509791548448",
                                    "Name": "IPI INSTALLATION ASSETS",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-915039509791548448/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-9173251013856554376",
                                    "Name": "LH - EAST",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "1977231224174512697",
                                            "Name": "Bulk Tankers East",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "-8479771499054452436",
                                                    "Name": "ABC Bulk Tankers",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-8479771499054452436/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7036615035760992659",
                                                    "Name": "BHN BULK EAST",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7036615035760992659/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-1474213945432393180",
                                                    "Name": "BIG MULTIQUEST BULK EAST",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-1474213945432393180/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-2324061135127095949",
                                                    "Name": "CHARTERBRIDGE BULK EAST",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-2324061135127095949/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-4260821836003246423",
                                                    "Name": "FUNDAMENTAL CHOICE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-4260821836003246423/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-8292182444413671148",
                                                    "Name": "HST Bulk",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-8292182444413671148/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "383027883319474455",
                                                    "Name": "Iquasu Bulk",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/383027883319474455/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "5299584372284746416",
                                                    "Name": "Mack Chagal Bulk",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/5299584372284746416/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-829422531302793613",
                                                    "Name": "REMBAM BULK EAST",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-829422531302793613/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-5705175048381816202",
                                                    "Name": "Tetralog BULK",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-5705175048381816202/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "6604715689666342341",
                                                    "Name": "TRULUCK BULK EAST",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/6604715689666342341/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "893688480976889324",
                                                    "Name": "WhiteSoul Bulk Tanker",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/893688480976889324/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "5203746754718337798",
                                                    "Name": "ZUDAC LTD",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/5203746754718337798/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "Id": "6745070562260625174",
                                            "Name": "DD",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "4519480485629772124",
                                                    "Name": "BHN",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/4519480485629772124/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "2764648901089775071",
                                                    "Name": "BHN EWEKORO EAST OPS",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/2764648901089775071/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7324756202291889622",
                                                    "Name": "Bufa Investment",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7324756202291889622/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-5380557730476686676",
                                                    "Name": "ECOLOGIQUE EAST OP",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-5380557730476686676/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-14364268663629658",
                                                    "Name": "Geoman Praise East Ops",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-14364268663629658/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7649535081935100659",
                                                    "Name": "HST East Op",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7649535081935100659/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "3550039768539889359",
                                                    "Name": "IQUASU",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/3550039768539889359/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-4768262781555412329",
                                                    "Name": "JOZA",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-4768262781555412329/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-1628638139656235450",
                                                    "Name": "Julius Ben Construction",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-1628638139656235450/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "4520568221847582885",
                                                    "Name": "Kaysky East Operation",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/4520568221847582885/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-9125131826277500475",
                                                    "Name": "Marc Chagall",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-9125131826277500475/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "4448910026910622067",
                                                    "Name": "NOFEJI EMPIRE LTD",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/4448910026910622067/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-7843805484396276970",
                                                    "Name": "RVL",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-7843805484396276970/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7988371929413888362",
                                                    "Name": "TETRALOG",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7988371929413888362/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7356885489670447314",
                                                    "Name": "Truluck East Ops",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7356885489670447314/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "363945459117550625",
                                                    "Name": "TSL EAST",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/363945459117550625/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "2774467164704324511",
                                                    "Name": "VICKY WORLD",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/2774467164704324511/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "4176620938156469416",
                                                    "Name": "WHITE SOUL",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/4176620938156469416/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "Id": "3601018375285168950",
                                            "Name": "MDD Transporters",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "8105233595610116898",
                                                    "Name": "ALOFARM MULTIPURPOSE VENTURE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/8105233595610116898/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-2649079771245579782",
                                                    "Name": "ASKON PROGRESSIVE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-2649079771245579782/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "1023628906946078859",
                                                    "Name": "BATOFRAMOJO E. ENTERPRISE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/1023628906946078859/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "8094522009475901690",
                                                    "Name": "BLESSED PATIOSA",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/8094522009475901690/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "20399157904556201",
                                                    "Name": "C C UMEH",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/20399157904556201/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "4498585270068501667",
                                                    "Name": "CHICO TRUST VENTURES NIG.",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/4498585270068501667/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-978310257529026240",
                                                    "Name": "CHINASA",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-978310257529026240/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-4148550691962057291",
                                                    "Name": "CHUKWUDI & SONS",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-4148550691962057291/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-938808089700309638",
                                                    "Name": "CHYKEN&SONS",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-938808089700309638/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-56294889150413080",
                                                    "Name": "DEUCHESON ENTERP",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-56294889150413080/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7956708694008064748",
                                                    "Name": "DONA DONA",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7956708694008064748/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-5249482967050822056",
                                                    "Name": "EKEFIRE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-5249482967050822056/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-9146383948315965702",
                                                    "Name": "EMMA BROS",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-9146383948315965702/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7200088357955966120",
                                                    "Name": "FAVOUR GLOBAL",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7200088357955966120/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "4283971844340727196",
                                                    "Name": "FESTY BASE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/4283971844340727196/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-3067296916124924980",
                                                    "Name": "Global 50-50",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-3067296916124924980/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7914507053343708118",
                                                    "Name": "Global SNCO",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7914507053343708118/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-6191808110987877142",
                                                    "Name": "GLOJOESAM INVEST. LTD",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-6191808110987877142/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7822381064744373616",
                                                    "Name": "GOLDPINE INTEGRATED SERVICES",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7822381064744373616/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "6612077147466138244",
                                                    "Name": "GREAT AGALA",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/6612077147466138244/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-5038211351316144390",
                                                    "Name": "Great Amobi Gas",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-5038211351316144390/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-7307845874126590917",
                                                    "Name": "I C ODIGWE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-7307845874126590917/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-3428214862777176216",
                                                    "Name": "Infor&Bros Nig.Ltd",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-3428214862777176216/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "636627856470736398",
                                                    "Name": "IZU GENERAL MERCHANDISE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/636627856470736398/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-6158189181511528220",
                                                    "Name": "JANNY & SONS",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-6158189181511528220/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "102517241756247849",
                                                    "Name": "JUDE C. MATTHIAS",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/102517241756247849/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-3435249918718795197",
                                                    "Name": "KEO Merchandising company",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-3435249918718795197/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "6137968004689277384",
                                                    "Name": "KPAKSBUDDY",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/6137968004689277384/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-1967210223553743971",
                                                    "Name": "MCEVANS",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-1967210223553743971/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-4286365750025984886",
                                                    "Name": "MEGA UCHECHI",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-4286365750025984886/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "4757308263173738719",
                                                    "Name": "MEKUS GAMBA",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/4757308263173738719/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-2000874875930851178",
                                                    "Name": "NILS NIGERIA ENT",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-2000874875930851178/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-920653415227997909",
                                                    "Name": "OBIOMA",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-920653415227997909/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "1458358011780752288",
                                                    "Name": "OGE ROSE ENTERPRISE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/1458358011780752288/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "3621796124508629992",
                                                    "Name": "ORAL TRADE INTL.",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/3621796124508629992/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "2491821801932941954",
                                                    "Name": "REVOLVE DEPOT",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/2491821801932941954/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-8478617051957285931",
                                                    "Name": "ROSENT (JBC)",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-8478617051957285931/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-2966589436024603561",
                                                    "Name": "TAMARK NIG LTD",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-2966589436024603561/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "4938496631679993280",
                                                    "Name": "UBOTEX",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/4938496631679993280/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "5838540459350265586",
                                                    "Name": "UMEKASON",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/5838540459350265586/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "1226773406525918930",
                                                    "Name": "UNEGBE VENTURE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/1226773406525918930/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-2470184429426056896",
                                                    "Name": "VINE LOVE UGO ENTERPRISES",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-2470184429426056896/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-1482170298369345406",
                                                    "Name": "VUNIC GLOBAL",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-1482170298369345406/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "Id": "4031753472027632599",
                                            "Name": "SPOT HIRE",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "-1740645634716837778",
                                                    "Name": "CHRIS HAULAGE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-1740645634716837778/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-2648125952171432307",
                                                    "Name": "CHRIS SUNNY",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-2648125952171432307/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-3804686685147112395",
                                                    "Name": "CNC MARBEL ENTERPRISE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-3804686685147112395/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "5261651457593757881",
                                                    "Name": "E . M . C GLOBAL  VENTURES",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/5261651457593757881/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-3664410731836226724",
                                                    "Name": "Fortune Dynamic Synergy",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-3664410731836226724/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "5035945332544935256",
                                                    "Name": "QUATRO MARINE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/5035945332544935256/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Id": "-1807713695549298646",
                                    "Name": "LH - NORTH",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-4204455344698317083",
                                            "Name": "A Y MUHAMMED",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-4204455344698317083/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1570305048178446557",
                                            "Name": "ADL Transport",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1570305048178446557/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "7999969059380955064",
                                            "Name": "ALAMASH",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/7999969059380955064/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "5789270504541166397",
                                            "Name": "Alfadila",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/5789270504541166397/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "4037083576572193498",
                                            "Name": "ALH GARBA ZAGADA ZAGADA",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/4037083576572193498/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-4051613815226947242",
                                            "Name": "Almanas",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-4051613815226947242/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1055704380072145549",
                                            "Name": "ALMAU VENTURES NIG LTD",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1055704380072145549/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "2180501519866930558",
                                            "Name": "AYB GERENGI",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/2180501519866930558/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "1687689802631669258",
                                            "Name": "BHN NORTH OPS",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/1687689802631669258/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-6633177920168541570",
                                            "Name": "Coal Trucks",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "4069143976338199459",
                                                    "Name": "AshakaCoalTrucks",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/4069143976338199459/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "Id": "5760011578881357707",
                                            "Name": "DANKASA INVESTMENT COMPANY",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/5760011578881357707/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "7176318983033142343",
                                            "Name": "KUSHIMAGA",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/7176318983033142343/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-7792442787489339600",
                                            "Name": "MANU MOHAMMED",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-7792442787489339600/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "7327571813736723098",
                                            "Name": "NORTH SPOT HIRE",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "66314619023116797",
                                                    "Name": "IFESON",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/66314619023116797/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "5298166208470115759",
                                                    "Name": "USMAN IDRIS NIGERIA LTD",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/5298166208470115759/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Id": "7594521814250136542",
                                    "Name": "LH - WEST",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-7553545205588449818",
                                            "Name": "DD WEST",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "-6682134878251164189",
                                                    "Name": "A A GLOBAL",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-6682134878251164189/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7182236531998902421",
                                                    "Name": "ABDLAS",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7182236531998902421/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-5526470265351286322",
                                                    "Name": "B.I.G Multiquest",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-5526470265351286322/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7266124590558852586",
                                                    "Name": "BHN EWEKORO",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7266124590558852586/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "1019773036019998518",
                                                    "Name": "CHARTERBRIDGE VENTURES LOGISTIC LTD",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/1019773036019998518/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "8171830716202330805",
                                                    "Name": "DEFROST",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/8171830716202330805/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-133208197397571172",
                                                    "Name": "DEOMAT",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-133208197397571172/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-8827877663936974538",
                                                    "Name": "EBONY",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-8827877663936974538/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-2023405563343220086",
                                                    "Name": "Ecologique",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-2023405563343220086/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7337674458272626531",
                                                    "Name": "EWECOOP",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7337674458272626531/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-3568012483332337632",
                                                    "Name": "GEOMAN PRAISE",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-3568012483332337632/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "1130818632953246744",
                                                    "Name": "HST",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/1130818632953246744/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "8398704788557996545",
                                                    "Name": "JBC West",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/8398704788557996545/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-2706429811659721682",
                                                    "Name": "JOZA West",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-2706429811659721682/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7928182121678800608",
                                                    "Name": "KAYSKY NIGERIA LIMITED",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7928182121678800608/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "3581200988467016879",
                                                    "Name": "LAFARGE TRANSPORT",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/3581200988467016879/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "5549147742762980238",
                                                    "Name": "REM BAM",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/5549147742762980238/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-2372696366530570166",
                                                    "Name": "Remo Commercial",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-2372696366530570166/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "7090998310862971351",
                                                    "Name": "SAGAMU GLOBAL",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/7090998310862971351/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-4652780709411972424",
                                                    "Name": "SHIWATECH",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-4652780709411972424/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-3119569363689995158",
                                                    "Name": "TRULUCK",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-3119569363689995158/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-7848463190328199436",
                                                    "Name": "TSL WEST",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-7848463190328199436/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "719078695521341243",
                                                    "Name": "WOW-ABDLAS",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/719078695521341243/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "1619296340766975187",
                                                    "Name": "WOW-B.I.G Multiquest",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/1619296340766975187/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "4496275398044563215",
                                                    "Name": "WOW-CHARTERBRIDGE VENTURES LOGISTICS LTD",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/4496275398044563215/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "86151599471656485",
                                                    "Name": "WOW-GEOMAN PRAISE & GLORY",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/86151599471656485/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "8180040845548115631",
                                                    "Name": "WOW-HST",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/8180040845548115631/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-4972751210875110294",
                                                    "Name": "WOW-KAYSKY",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-4972751210875110294/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-421069761023576662",
                                                    "Name": "WOW-OLABISI EBONY",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-421069761023576662/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "200085767690211281",
                                                    "Name": "WOW-REMBAM",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/200085767690211281/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-5610672117355431631",
                                                    "Name": "WOW-REMO COMMERCIAL",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-5610672117355431631/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-3966947284178894018",
                                                    "Name": "WOW-TRULUCK",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-3966947284178894018/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "Id": "5800491667581502577",
                                            "Name": "MDD",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1
                                        },
                                        {
                                            "Id": "1298607146259383335",
                                            "Name": "SPOT HIRE WEST",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "-7693498005565742546",
                                                    "Name": "TSL WEST (SH)",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-7693498005565742546/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "Id": "703762451856979528",
                                            "Name": "WEST BULK TANKER",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "2336660718035566251",
                                                    "Name": "A A Global - Bulk Tankers",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/2336660718035566251/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-8546010236625814240",
                                                    "Name": "BHN - Bulk Tankers",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-8546010236625814240/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "2336783905161048675",
                                                    "Name": "BIG Bulk",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/2336783905161048675/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "2380826156619151601",
                                                    "Name": "CHARTERBRIDGE VENTURES LOGISTIC LTD- BULK",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/2380826156619151601/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-2008599923940200985",
                                                    "Name": "LAFARGE TRANSPORT BULK",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-2008599923940200985/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-5162879226349536892",
                                                    "Name": "REMBAM Bulk Tankers",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-5162879226349536892/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                },
                                                {
                                                    "Id": "-3715556585150402735",
                                                    "Name": "Truluck - Bulk tankers",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/-3715556585150402735/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "Id": "1618791772396651606",
                                    "Name": "MiX Vision Pilot Cement",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "2504076242063393255",
                                            "Name": "Mix Vision Pilot North",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "8449539077101890974",
                                                    "Name": "AY MOHAMEED Ai",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/8449539077101890974/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "Id": "7284779984465210868",
                                            "Name": "Mix Vision Pilot West",
                                            "Registration": null,
                                            "Type": "orgsubgroup",
                                            "Selectable": 1,
                                            "Items": [
                                                {
                                                    "Id": "2451748104067828862",
                                                    "Name": "Ecologique AI",
                                                    "Registration": null,
                                                    "Type": "site",
                                                    "Selectable": 1,
                                                    "HyperMedia": {
                                                        "Links": [
                                                            {
                                                                "ModifyData": false,
                                                                "ExcludeBodyFromResponse": false,
                                                                "Rel": "getItems",
                                                                "Uri": "DynaMiX.API/timeline/sites/2451748104067828862/assets/False",
                                                                "Verb": "GET",
                                                                "Params": {},
                                                                "Host": null,
                                                                "SuppressAuthentication": false
                                                            }
                                                        ],
                                                        "Validations": {
                                                            "FormName": null,
                                                            "ValidationRules": {},
                                                            "HasMonitoredEvents": false
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "Id": "7188186691220298814",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7188186691220298814/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "6662270630987657697",
                            "Name": "INBOUND TRUCKS",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "7010318378230397141",
                                    "Name": "EAST INBOUND",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-4424956854883136605",
                                            "Name": "RVL INBOUND",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-4424956854883136605/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-6668752201183476891",
                                    "Name": "NORTH INBOUND",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "1278405895237595695",
                                            "Name": "68 CONSTRUCTION",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/1278405895237595695/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "6220741832612255435",
                                            "Name": "A.B.I Nig. Ltd",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/6220741832612255435/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "2306748958459961528",
                                            "Name": "AB kurawa",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/2306748958459961528/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-2537751774759465416",
                                            "Name": "ABS rajah",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-2537751774759465416/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "3897852696602797468",
                                            "Name": "ASHAKA COAL TRUCKS",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3897852696602797468/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-5120052608592017399",
                                            "Name": "Gamuya",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-5120052608592017399/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-4795356127013518664",
                                            "Name": "Haske",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-4795356127013518664/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1721559941520879141",
                                            "Name": "KUSHIMAGA Coal Trucks",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1721559941520879141/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-8292936967809041535",
                                            "Name": "Maiyaki",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-8292936967809041535/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "732871363249266743",
                                            "Name": "Sharoji Global",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/732871363249266743/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "2603670637851611060",
                                    "Name": "WEST INBOUND",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-1331580568564366720",
                                            "Name": "COASTWISE  IBT",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1331580568564366720/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-5424778286327489600",
                                            "Name": "SKB",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-5424778286327489600/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "Id": "-3279435335702589348",
                            "Name": "Installation in Progress",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-3279435335702589348/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "4758458711636014601",
                            "Name": "Kobo Logistics",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "4349425458248719726",
                                    "Name": "AFRIPOWERS NIGERIA LIMITED 2",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/4349425458248719726/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-8594192642093491251",
                                    "Name": "WhitesoulB",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-8594192642093491251/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "-7129163717564612735",
                            "Name": "Lafarge Light Vehicles",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-7696071108026237442",
                                    "Name": "Ashaka Fleet",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "3502279784112038297",
                                            "Name": "Ashaka Clinic Veh",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3502279784112038297/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "718778725245685711",
                                            "Name": "Ashaka Fire Engine",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/718778725245685711/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "7592581689998956841",
                                            "Name": "Ashaka Operational Fleet",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/7592581689998956841/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-3973020307644489444",
                                            "Name": "Ashaka Pool Veh.",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-3973020307644489444/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-3930404845193881033",
                                            "Name": "Ashaka Security",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-3930404845193881033/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-4711544032841407516",
                                    "Name": "Ewekoro Fleet",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-549124943465324190",
                                            "Name": "Ewekoro Geocycle Truck",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-549124943465324190/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "1417806341820880124",
                                            "Name": "Ewekoro Operational Fleet",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/1417806341820880124/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "3039472537324722603",
                                            "Name": "Ewekoro Peoples Transport",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3039472537324722603/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "3187206265108356731",
                                            "Name": "Ewekoro Pool Veh",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3187206265108356731/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-4071040315408402813",
                                    "Name": "HQ Fleet",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "161841566069523794",
                                            "Name": "HQ Operational Fleet",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/161841566069523794/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-2144589953694690277",
                                            "Name": "HQ Pool",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-2144589953694690277/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-7214583095437725868",
                                            "Name": "HQ Security",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-7214583095437725868/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-6732177767690018613",
                                    "Name": "Mfamosing Fleet",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "1046677869557400283",
                                            "Name": "Mfamosing Operational Fleet",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/1046677869557400283/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "4159345556634637506",
                                            "Name": "Mfamosing Peoples Transport",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/4159345556634637506/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-5954631554749376496",
                                            "Name": "Mfamosing Pool",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-5954631554749376496/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "4447446606056171037",
                                            "Name": "Road Project Department",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/4447446606056171037/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-7876683371645752586",
                                    "Name": "NKB Plant",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-6181845776480157386",
                                            "Name": "NKB Plant Operational Fleet",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-6181845776480157386/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "128008566141621078",
                                            "Name": "NKB Plant Pool",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/128008566141621078/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-9105966434529335075",
                                            "Name": "NKB Plant Security",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-9105966434529335075/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "Id": "7558446459620322208",
                            "Name": "LH Customer Assets",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "4117806393261204794",
                                    "Name": "Aba Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-3220667765627390486",
                                            "Name": "Glojoesam Investment Ltd",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-3220667765627390486/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-6072529159800805278",
                                            "Name": "Irokosteel International",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-6072529159800805278/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-8445277309750850135",
                                            "Name": "Mcevans Ventures Ltd",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-8445277309750850135/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "7116898254647275084",
                                    "Name": "Abeokuta Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-3823040572207376794",
                                            "Name": "Alh. Abbey Adebisi & Co.",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-3823040572207376794/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-5719361084754960243",
                                            "Name": "B&S VENTURES",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-5719361084754960243/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "7816484527111490537",
                                            "Name": "Dateefat Nig. Ltd",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/7816484527111490537/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-6746823608336480694",
                                            "Name": "DOVE CEMENT",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-6746823608336480694/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "7546536603023520947",
                                            "Name": "Femyok",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/7546536603023520947/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1329784431605244542",
                                            "Name": "Oke M Block",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1329784431605244542/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "7599947204721141010",
                                            "Name": "POSU",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/7599947204721141010/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1378126525070209795",
                                            "Name": "Vicross Ent",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1378126525070209795/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "3738132561566691405",
                                            "Name": "WALTERADE",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3738132561566691405/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "5234630384532770103",
                                            "Name": "Yusfaith",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/5234630384532770103/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "4791269430571182415",
                                    "Name": "Ado",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "6419012788162769434",
                                            "Name": "Ado ekiti",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/6419012788162769434/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-4292632581902455475",
                                    "Name": "Agbara Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-8498022289292589548",
                                            "Name": "TEMITOPE",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-8498022289292589548/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-5469959413387122820",
                                            "Name": "VIHANO",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-5469959413387122820/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-8679246852455632191",
                                    "Name": "Ajah Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "6067906440873218022",
                                            "Name": "Alhaja Joke Ojogbede",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/6067906440873218022/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "1533795766156689766",
                                            "Name": "Boatan Ventures",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/1533795766156689766/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-7176370675991666183",
                                            "Name": "CRYSTAL CLEAR",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-7176370675991666183/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "6605171381672024872",
                                            "Name": "DOUBLE D Unique Ventures",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/6605171381672024872/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-8046724951170541048",
                                            "Name": "Haladex Construction Limited",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-8046724951170541048/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-7985326465040226158",
                                            "Name": "IFA",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-7985326465040226158/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-4012401610481132912",
                                            "Name": "Kessayo International Ltd",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-4012401610481132912/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-3708314818325323612",
                                            "Name": "Maseliz",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-3708314818325323612/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-5069209841466964603",
                                            "Name": "Matib",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-5069209841466964603/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-3946134714975758002",
                                            "Name": "Olasunkanmi Global Enterprises",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-3946134714975758002/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "2594925188161544647",
                                            "Name": "UGO",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/2594925188161544647/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-2757326396836770742",
                                    "Name": "Akure",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-6641374314451426843",
                                            "Name": "Akure Depot",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-6641374314451426843/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "1801327589493336740",
                                    "Name": "Eleyele Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-4707003940993565545",
                                            "Name": "Abiodun Akinleye",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-4707003940993565545/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1073729711848882620",
                                            "Name": "Ade- Adewunmi Nig. Ent.",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1073729711848882620/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-5096935370548978610",
                                            "Name": "Eleyele Depot",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-5096935370548978610/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "3958141681571349333",
                                            "Name": "Joseph Castles & Towers",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3958141681571349333/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "6257872673362633828",
                                            "Name": "L.A. Lawal Nigeria Enterprises",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/6257872673362633828/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "2008705123614219393",
                                            "Name": "Nokis Noble Company",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/2008705123614219393/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1652377000746011621",
                                            "Name": "Omo-Akin Megatop Global Ventures",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1652377000746011621/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1475461328963946240",
                                            "Name": "S.O.J Ent.",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1475461328963946240/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "8405166213130161632",
                                            "Name": "Sandra & Smith Enterprises",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/8405166213130161632/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "5539153985465308297",
                                            "Name": "Taokas Multi- Concepts",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/5539153985465308297/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "3877218667690752147",
                                            "Name": "Tito Ventures",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3877218667690752147/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-5684123947307092776",
                                            "Name": "Vicky Adeoye Ventures",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-5684123947307092776/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-1989953983780267640",
                                    "Name": "Enugu Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-3811436648999780029",
                                            "Name": "Avitrade Network Ltd",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-3811436648999780029/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1751097897876558873",
                                            "Name": "Gask-Chida And Sons Ltd",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1751097897876558873/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "8673004679655711578",
                                            "Name": "JOEMACHINE SERVICES",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/8673004679655711578/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "1140367127783333468",
                                            "Name": "Umekason Trading Stores",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/1140367127783333468/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-8987194403338375697",
                                            "Name": "Unegbe Ventures Ltd",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-8987194403338375697/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "4019235202417158238",
                                    "Name": "Ikorodu Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1
                                },
                                {
                                    "Id": "8189981561972012089",
                                    "Name": "Iseyin",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "8430431686607478286",
                                            "Name": "Iseyin",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/8430431686607478286/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-7101841419093635604",
                                    "Name": "Oregun Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-8516351012377627438",
                                            "Name": "Alabama Global Ventures",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-8516351012377627438/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "7569274813950926660",
                                            "Name": "Ebony - Depot",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/7569274813950926660/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "3534786791903340",
                                            "Name": "Eji-Ade Ent",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3534786791903340/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "6596295223559509184",
                                            "Name": "Emmanuel Adebayo",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/6596295223559509184/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1453790053523108886",
                                            "Name": "Ibisola",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1453790053523108886/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "4069743285188862939",
                                            "Name": "KAZEEZAT",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/4069743285188862939/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-7681014598935799853",
                                            "Name": "Moray Unique Enterprises - Depot",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-7681014598935799853/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "369355744924756059",
                                            "Name": "OLA ADAMS",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/369355744924756059/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "1559631667352586703",
                                            "Name": "TAI-DEM & SONS",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/1559631667352586703/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-6269275549800148744",
                                            "Name": "TIMPALAS AGRO ALLIED VENTURES",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-6269275549800148744/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-2337234281380037676",
                                            "Name": "TRIDAC ENTERPRISE",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-2337234281380037676/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "4592657985036596364",
                                    "Name": "Oshogbo Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "3256485054382592535",
                                            "Name": "Osogbo Depot",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3256485054382592535/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "624328440525197483",
                                    "Name": "Owerri Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "7029618018896200931",
                                            "Name": "Davidson Global Nig Ent",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/7029618018896200931/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-1602937024951937202",
                                            "Name": "Global 50:50 Concept Nig. Ltd",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-1602937024951937202/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-8571979575158462214",
                                            "Name": "Owerri Assets",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-8571979575158462214/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "3212835062614471221",
                                            "Name": "Vine Lov Ugo Enterprises",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3212835062614471221/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "4365373935419103684",
                                    "Name": "PH Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "6167367778721137902",
                                            "Name": "Goldpine Integrated Services - Depot",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/6167367778721137902/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-251451333697927843",
                                            "Name": "Goodluck O. Nwaneri And Sons",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-251451333697927843/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "3499963189331085333",
                                            "Name": "Sammyking Building Material",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/3499963189331085333/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "152972028767512324",
                                            "Name": "Shamah-Junex Ltd",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/152972028767512324/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "-805746550586998329",
                                    "Name": "Uyo Depot",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "-5900039546648344323",
                                            "Name": "Becuk Investment",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-5900039546648344323/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "1455480195427247296",
                                            "Name": "Festy Base Ent",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/1455480195427247296/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "946558083026963282",
                                            "Name": "Nonea Integrated Services Nigeria",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/946558083026963282/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-4472502278907050504",
                                            "Name": "Ubotex Depot",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-4472502278907050504/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "Id": "-1013161312324499790",
                            "Name": "LH Quarry",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-7063706136432427503",
                                    "Name": "QUARRY EWEKORO",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "7909628963418013573",
                                            "Name": "Bulldozer&others",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/7909628963418013573/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-772463066094965521",
                                            "Name": "Excavators Ewekoro",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-772463066094965521/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "8697316535007828267",
                                            "Name": "Tonly Ewekoro",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/8697316535007828267/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    "Id": "5177593596223250860",
                                    "Name": "QUARRY MFAMOSING",
                                    "Registration": null,
                                    "Type": "orgsubgroup",
                                    "Selectable": 1,
                                    "Items": [
                                        {
                                            "Id": "7680743215345477326",
                                            "Name": "Excavators Mfamosing",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/7680743215345477326/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        },
                                        {
                                            "Id": "-3114436609305353845",
                                            "Name": "Tonly Mfamosing",
                                            "Registration": null,
                                            "Type": "site",
                                            "Selectable": 1,
                                            "HyperMedia": {
                                                "Links": [
                                                    {
                                                        "ModifyData": false,
                                                        "ExcludeBodyFromResponse": false,
                                                        "Rel": "getItems",
                                                        "Uri": "DynaMiX.API/timeline/sites/-3114436609305353845/assets/False",
                                                        "Verb": "GET",
                                                        "Params": {},
                                                        "Host": null,
                                                        "SuppressAuthentication": false
                                                    }
                                                ],
                                                "Validations": {
                                                    "FormName": null,
                                                    "ValidationRules": {},
                                                    "HasMonitoredEvents": false
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "Id": "7489610739019979428",
                            "Name": "Maintenance Tag & Spare Tags",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7489610739019979428/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-2590470312115005517",
                            "Name": "MDD Drivers",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-2590470312115005517/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-542394081130791132",
                            "Name": "NEW IPI INSTALL",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-4776149944956755198",
                                    "Name": "Asset for use",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-4776149944956755198/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "3874605111297622142",
                            "Name": "Non Operational in LH Operations",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-5381940860159088454",
                                    "Name": "A A Global(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-5381940860159088454/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "2566768349848476799",
                                    "Name": "A.A RAJAH",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/2566768349848476799/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "9147622718157012158",
                                    "Name": "ABC(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/9147622718157012158/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "2006059064547418262",
                                    "Name": "ABDLAS(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/2006059064547418262/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-8992380366682058827",
                                    "Name": "ABUNAJIBULLAH",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-8992380366682058827/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-140076320825414247",
                                    "Name": "AFRIPOWER(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-140076320825414247/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-5963544293820371143",
                                    "Name": "Ashaka Non operational trucks(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-5963544293820371143/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "277181833933509810",
                                    "Name": "BHN EWE Non LH Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/277181833933509810/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "4809592032233771817",
                                    "Name": "BHN Non LH ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/4809592032233771817/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "8752722099350490636",
                                    "Name": "BIG Non LH Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/8752722099350490636/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "7446114215792934827",
                                    "Name": "BODORIYAL",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/7446114215792934827/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "6980778041000788873",
                                    "Name": "CBV Non LH Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/6980778041000788873/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "8946925467486674284",
                                    "Name": "Defrost(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/8946925467486674284/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "8392446199772139216",
                                    "Name": "Deomat(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/8392446199772139216/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "2256222805011073603",
                                    "Name": "DRYVA Non LH Op",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/2256222805011073603/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-8123436009958678578",
                                    "Name": "Ebony Non LH Op",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-8123436009958678578/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "102094934992290049",
                                    "Name": "ECOLOGIQUE Non LH Op",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/102094934992290049/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "8619938949332034631",
                                    "Name": "Ewecoop(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/8619938949332034631/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "3969869643358566632",
                                    "Name": "Fundamental Choice Non Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/3969869643358566632/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "8822320056234724858",
                                    "Name": "GPC(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/8822320056234724858/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "8697271436857441886",
                                    "Name": "GPG Non LH Op",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/8697271436857441886/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-6323841624192203701",
                                    "Name": "HST Non Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-6323841624192203701/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "2406868689456938767",
                                    "Name": "Iquasu Non LH Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/2406868689456938767/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-8879394144607458056",
                                    "Name": "JBC(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-8879394144607458056/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-1792036664127562178",
                                    "Name": "Joza Non operational",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-1792036664127562178/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "6370493817468014258",
                                    "Name": "Kaysky Non LH Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/6370493817468014258/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-7279257062168428027",
                                    "Name": "Lanre Shittu Non LH Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-7279257062168428027/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "7979448517825491977",
                                    "Name": "Mack chagal Non LH ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/7979448517825491977/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "4961616146188546520",
                                    "Name": "MONDCHRIS LIMITED NON LH OPS",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/4961616146188546520/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "458362346946601257",
                                    "Name": "Obioma Non LH Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/458362346946601257/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-5666640110683753685",
                                    "Name": "RDYMIX NON LH OPERATION",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-5666640110683753685/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "1898368156966354446",
                                    "Name": "Rembam(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/1898368156966354446/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-485484473551652652",
                                    "Name": "RVL(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-485484473551652652/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "9150210907912856122",
                                    "Name": "SAGAMU GLOBAL(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/9150210907912856122/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-1923761458442340872",
                                    "Name": "Shiwatech(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-1923761458442340872/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-6020530025729614993",
                                    "Name": "Tetralog(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-6020530025729614993/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-5511875771531381579",
                                    "Name": "TRUCKLOG Non LH Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-5511875771531381579/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "1204173633332039398",
                                    "Name": "Truluck(Non LH OPS)",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/1204173633332039398/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-13654792344104084",
                                    "Name": "TSL Non LH Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-13654792344104084/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "6468662152743769619",
                                    "Name": "Vicky World Non Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/6468662152743769619/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-8036782415427240929",
                                    "Name": "Whitesoul Non LH Ops",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-8036782415427240929/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "3764920794449763173",
                                    "Name": "WURO YOLDE",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/3764920794449763173/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "2344564351206473903",
                            "Name": "READY MIX",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-4393173315878055508",
                                    "Name": "BEVLEX ABUJA PLANT",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-4393173315878055508/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-1760107599720793763",
                                    "Name": "BEVLEX READYMIX PUMP",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-1760107599720793763/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-8113025458616853799",
                                    "Name": "BEVLEX/Lagos Plant",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-8113025458616853799/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "8627738525348738061",
                                    "Name": "BEVLEX/PH PLANT",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/8627738525348738061/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "854492601263239265",
                                    "Name": "HABEEB GLOBAL/LAGOS PLANT",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/854492601263239265/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-5541625554957966070",
                                    "Name": "JOZA RMX",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-5541625554957966070/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-2780188115695423306",
                                    "Name": "KAYSKY/ABUJA PLANT",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-2780188115695423306/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-234524226696874656",
                                    "Name": "KAYSKY/LAGOS PLANT",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-234524226696874656/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "1922017975501487771",
                                    "Name": "Light Vehicles",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/1922017975501487771/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-7482590426702563947",
                                    "Name": "RDYMIX ABUJA",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-7482590426702563947/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "6445039119208874730",
                                    "Name": "RDYMIX PH",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/6445039119208874730/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "7854612260172556958",
                                    "Name": "TRULUCK PH PLANT",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/7854612260172556958/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "4371008793538733980",
                                    "Name": "TRULUCK READYMIX PUMP",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/4371008793538733980/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "6526831807331530268",
                                    "Name": "TRULUCK/ABUJA PLANT",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/6526831807331530268/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "2637398480413719803",
                                    "Name": "TRULUCK/LAGOS PLANT",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/2637398480413719803/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "-5873335967151240148",
                            "Name": "Sales",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "-1114954466166758615",
                                    "Name": "ANGEL ONYEBUCHI OGU BIZ VENTURES",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-1114954466166758615/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-4639423234793358807",
                                    "Name": "IYA MILIKI & SONS",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-4639423234793358807/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-7599131498418818581",
                                    "Name": "K.E.O MERCHANDISING COMPANY",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-7599131498418818581/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-6608199592299552562",
                                    "Name": "MASELIZ ENTERPRISES",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-6608199592299552562/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-1348910545731338511",
                                    "Name": "ROGLADE NIG. LTD.",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-1348910545731338511/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "4380927202339222256",
                                    "Name": "VICROSS ENT.",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/4380927202339222256/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "-9141789923205469172",
                            "Name": "XN - Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-9141789923205469172/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "-3541016774019468464",
                    "Name": "Africa - Best Practices - MDS Logistics",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "5952524413914233117",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/5952524413914233117/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-6572877037981898260",
                            "Name": "Nigeria Brewries",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-6572877037981898260/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-8076226363370257654",
                            "Name": "X-Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-8076226363370257654/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-9102591657122594054",
                            "Name": "XN-Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-9102591657122594054/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "4551243907563007122",
                    "Name": "Africa - Best Practices - National Oilwell Varco",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "8743682301702324613",
                            "Name": "APL",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/8743682301702324613/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-2874531026164758200",
                            "Name": "CAMEROUN",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-2874531026164758200/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-7108096536103458149",
                            "Name": "CONGO BRAZAVILLE",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-7108096536103458149/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "8929178613852857658",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/8929178613852857658/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "4445034152022415959",
                            "Name": "DOWNHOLE",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/4445034152022415959/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-5882587356537273963",
                            "Name": "FLUID CONTROL, ANGOLA",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-5882587356537273963/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "1186768510685746819",
                            "Name": "GABON",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/1186768510685746819/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "2306924183200999411",
                            "Name": "GHANA",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2306924183200999411/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "8220185968622674869",
                            "Name": "INSTALLATION IN PROGRESS",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/8220185968622674869/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "4671223208272671279",
                            "Name": "KENYA",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/4671223208272671279/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-7612766872870462274",
                            "Name": "REEDHYCALOG",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-7612766872870462274/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "3343389071622245494",
                            "Name": "XN - Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/3343389071622245494/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "-5000113195850094917",
                    "Name": "Africa - Best Practices - Nevcotrack Integrated services",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "3481662923714431031",
                            "Name": "AUTOGIG",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/3481662923714431031/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-7789703736123023541",
                            "Name": "Chinedu",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-7789703736123023541/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "5580610604204946661",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/5580610604204946661/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "2135648717868182799",
                            "Name": "Dimeji",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2135648717868182799/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "3491737440756221445",
                            "Name": "Lolu",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/3491737440756221445/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "6060167357350568377",
                            "Name": "Oluwafeyikemi",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/6060167357350568377/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "1042091472932684062",
                            "Name": "Osaze",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/1042091472932684062/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "7981375147913843855",
                            "Name": "X - Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7981375147913843855/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-5727744417127350675",
                            "Name": "XN - Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-5727744417127350675/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "-7190219300178039913",
                    "Name": "Africa - Best Practices - Non Lafarge Operations",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "-2732277695263449112",
                            "Name": "AAG EXECUTIVE",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-2732277695263449112/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "2473494424967270635",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2473494424967270635/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-4903594272905487133",
                            "Name": "Guiness Benin",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-4903594272905487133/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-6491313446063632339",
                            "Name": "Guiness Ikeja",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-6491313446063632339/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "5683296737492277097",
                            "Name": "Nestle  SBU",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/5683296737492277097/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "7188883448774301165",
                            "Name": "PZ SBU",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7188883448774301165/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "7697054321792511496",
                            "Name": "Total Lube (Koko Project)",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7697054321792511496/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-2449086285194518734",
                            "Name": "Total Lube Operation(Dry)",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-2449086285194518734/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-4827772872368692201",
                            "Name": "Total Patrom",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-4827772872368692201/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-1636049817019115438",
                            "Name": "Total Wet Tankers",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1636049817019115438/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "2389964197201537878",
                            "Name": "XN - Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2389964197201537878/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "3116971308376415047",
                    "Name": "Africa - Best Practices - Octavus Petroleum",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "-7241868006022835529",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-7241868006022835529/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-4115523162477974142",
                            "Name": "Octavus Petroleum",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-4115523162477974142/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-348624052524368606",
                            "Name": "X-Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-348624052524368606/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-5135574847112812746",
                            "Name": "XN-Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-5135574847112812746/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "1646262595665027072",
                    "Name": "Africa - Best Practices - Ringardas Nigeria Limited",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "-4968192306859439137",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-4968192306859439137/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "-6394253629779488142",
                    "Name": "Africa - Best Practices - Silverfreight",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "-1202816149727858778",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1202816149727858778/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-5549010030622836",
                            "Name": "Haulage",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-5549010030622836/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-7275609989860182602",
                            "Name": "Transport",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-7275609989860182602/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-2272615857660852336",
                            "Name": "XN - Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-2272615857660852336/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "-666475445920867663",
                    "Name": "Africa - Mix - Weatherford Nigeria",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "4432705790012936543",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/4432705790012936543/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-3195232022525653846",
                            "Name": "Weatherford Nigeria - Lagos",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-3195232022525653846/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "7516898234412952457",
                            "Name": "Weatherford Nigeria - PHC - Heavy Duty",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7516898234412952457/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-4496678765338867189",
                            "Name": "Weatherford Nigeria - PHC - Light Fleet",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-4496678765338867189/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "3230949851811225748",
                            "Name": "XN - Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/3230949851811225748/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "4874661791479713581",
                    "Name": "TotalEnergies-MS/AFR-Nigeria-HV-D",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "8504046031527286006",
                            "Name": "A&A GLOBAL LEASING SERVICES LIMITED.- TE",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/8504046031527286006/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-8037625199148960852",
                            "Name": "ADS, KANO",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-8037625199148960852/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-5623545318170966469",
                            "Name": "ALBASMA INTERNATIONAL LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-5623545318170966469/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "3690289151347358017",
                            "Name": "ASB, SULEJA",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/3690289151347358017/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "2536954643160806956",
                            "Name": "AUSTAM",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2536954643160806956/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "2890699128645671923",
                            "Name": "AY SULEYMAN",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2890699128645671923/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-676761189525462161",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-676761189525462161/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "4037257634637844315",
                            "Name": "Delisted Transporter",
                            "Registration": null,
                            "Type": "orgsubgroup",
                            "Selectable": 1,
                            "Items": [
                                {
                                    "Id": "669802173567107524",
                                    "Name": "AKIAVIC",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/669802173567107524/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-5093710761952351997",
                                    "Name": "ANJENIDAN",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-5093710761952351997/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "8404290816632035734",
                                    "Name": "AZMAN",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/8404290816632035734/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "2628730368266692881",
                                    "Name": "decommissioned Drivers",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/2628730368266692881/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-4421669146036553931",
                                    "Name": "LPG TRUCKS",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-4421669146036553931/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-8235527956116522117",
                                    "Name": "MASEJIK TRANSPORT",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-8235527956116522117/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-7691619471819452484",
                                    "Name": "MOSCOL TRANSPORT ABA",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-7691619471819452484/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-2072519747571419741",
                                    "Name": "MURADA ABUJA",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-2072519747571419741/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "6139333363837652466",
                                    "Name": "My Site",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/6139333363837652466/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "545654009059933189",
                                    "Name": "PAWINA",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/545654009059933189/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                },
                                {
                                    "Id": "-923276198812314465",
                                    "Name": "SAO 25",
                                    "Registration": null,
                                    "Type": "site",
                                    "Selectable": 1,
                                    "HyperMedia": {
                                        "Links": [
                                            {
                                                "ModifyData": false,
                                                "ExcludeBodyFromResponse": false,
                                                "Rel": "getItems",
                                                "Uri": "DynaMiX.API/timeline/sites/-923276198812314465/assets/False",
                                                "Verb": "GET",
                                                "Params": {},
                                                "Host": null,
                                                "SuppressAuthentication": false
                                            }
                                        ],
                                        "Validations": {
                                            "FormName": null,
                                            "ValidationRules": {},
                                            "HasMonitoredEvents": false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "Id": "2529033350634547712",
                            "Name": "ENTROM",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2529033350634547712/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-4791730858302086541",
                            "Name": "ETERNITY",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-4791730858302086541/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "4607182989537964087",
                            "Name": "M M ABDULLAHI",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/4607182989537964087/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "1272042255033712628",
                            "Name": "PATRICK TELFORD",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/1272042255033712628/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-3479007231939702776",
                            "Name": "PRO BONO",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-3479007231939702776/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-6247048848446914793",
                            "Name": "RABIU YOLA KADUNA",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-6247048848446914793/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-7783968478893724271",
                            "Name": "REAL GOLD",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-7783968478893724271/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-961260705692158405",
                            "Name": "S.A.OLADITI",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-961260705692158405/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-4768044546310388773",
                            "Name": "SILVERFREIGHT,KADUNA",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-4768044546310388773/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "6695026545030286752",
                            "Name": "Suspended trucks",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/6695026545030286752/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-5958065585113737666",
                            "Name": "TABS SUPPLY",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-5958065585113737666/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "2477669158520800219",
                            "Name": "TE - holding assets",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/2477669158520800219/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-1304502728711282042",
                            "Name": "TE - holding stock.",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1304502728711282042/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-3908314117215185385",
                            "Name": "TE- Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-3908314117215185385/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "6843645449172159059",
                            "Name": "TE DELISTED TRUCKS",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/6843645449172159059/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-2222811331299622444",
                            "Name": "TSL",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-2222811331299622444/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-1276358027547692436",
                            "Name": "ZEALOUS",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1276358027547692436/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-1598544134751946046",
                            "Name": "ZZ - DO NOT USE",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1598544134751946046/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                },
                {
                    "Id": "-1360774639802648291",
                    "Name": "TotalEnergies-MS/AFR-Nigeria-HV-D (Adhoc)",
                    "Registration": null,
                    "Type": "organisation",
                    "Selectable": 1,
                    "Items": [
                        {
                            "Id": "-1149839262346852716",
                            "Name": "ADS (ADHOC)",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1149839262346852716/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "7407264202995406425",
                            "Name": "ALH. RABIU MOHAMMED YOLA NIGERIA LTD(ADHOC)",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7407264202995406425/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "4717010743997907295",
                            "Name": "AMZEAL STANDARD HAULAGE LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/4717010743997907295/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-1663230790387496795",
                            "Name": "BEKIND ABDEEN INTERNATIONAL BUSINESS LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1663230790387496795/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "1377078813053340354",
                            "Name": "COCEAN ENERGY & OIL SERVICES LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/1377078813053340354/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-1441396723477323518",
                            "Name": "COMPETRO OIL AND GAS LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-1441396723477323518/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "6812028940091397734",
                            "Name": "CRESEADA HAULAGE",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/6812028940091397734/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-6864318860884809068",
                            "Name": "Default Site",
                            "Registration": null,
                            "Type": "default",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-6864318860884809068/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "1397061349755432340",
                            "Name": "ETERNITY LOGISTICS LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/1397061349755432340/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-7502496846958897556",
                            "Name": "H.C CONTESTANTS NIG. LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-7502496846958897556/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-6852278868945596559",
                            "Name": "LIMON OIL & GAS LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-6852278868945596559/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-72456742680647732",
                            "Name": "MENECO TRANSPORT LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-72456742680647732/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-770772081473900559",
                            "Name": "MOSCOL TRANSPORT COMPANY LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-770772081473900559/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "6795192474619138451",
                            "Name": "NESC INTEGRATED SYSTEM",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/6795192474619138451/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "3318508902770846784",
                            "Name": "ODOGWU ZEBSON INTERNATIONAL LTD",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/3318508902770846784/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "7895998203103079790",
                            "Name": "PAWINA CONTINENTAL LIMITED(SPOT)",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7895998203103079790/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "8328205335296069270",
                            "Name": "SID OIL AND GAS",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/8328205335296069270/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "7999014183748815950",
                            "Name": "SOLFAD FUWAS INTERNATIONAL LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/7999014183748815950/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "-6265691091733191792",
                            "Name": "TECNORAPP OVERSEAS LTD",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/-6265691091733191792/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "822359711545176928",
                            "Name": "TRIPOD HAUL AGING LIMITED",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/822359711545176928/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        },
                        {
                            "Id": "5166422999295422698",
                            "Name": "XN - Decommissioned",
                            "Registration": null,
                            "Type": "site",
                            "Selectable": 1,
                            "HyperMedia": {
                                "Links": [
                                    {
                                        "ModifyData": false,
                                        "ExcludeBodyFromResponse": false,
                                        "Rel": "getItems",
                                        "Uri": "DynaMiX.API/timeline/sites/5166422999295422698/assets/False",
                                        "Verb": "GET",
                                        "Params": {},
                                        "Host": null,
                                        "SuppressAuthentication": false
                                    }
                                ],
                                "Validations": {
                                    "FormName": null,
                                    "ValidationRules": {},
                                    "HasMonitoredEvents": false
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "SearchCommands": [
        {
            "SearchOnTheseGroups": [
                "organisation",
                "orgsubgroup",
                "site",
                "default"
            ],
            "WildcardSearchOnTheseTypes": [
                "asset"
            ],
            "IconClassName": "icon-car",
            "IconToolTip": "Search asset",
            "EventName": "onAsyncSearchAssetSelection",
            "HyperMedia": {
                "Links": [
                    {
                        "ModifyData": false,
                        "ExcludeBodyFromResponse": false,
                        "Rel": "getItemsAsync",
                        "Uri": "DynaMiX.API/timeline/sites/search/asset/hos/False/multiSelectable/False",
                        "Verb": "GET",
                        "Params": {},
                        "Host": null,
                        "SuppressAuthentication": false
                    }
                ],
                "Validations": {
                    "FormName": null,
                    "ValidationRules": {},
                    "HasMonitoredEvents": false
                }
            }
        }
    ],
    "HyperMedia": {
        "Links": [],
        "Validations": {
            "FormName": null,
            "ValidationRules": {},
            "HasMonitoredEvents": false
        }
    }
}
};

function extractAssets(items, transporter = '') {
  const assets = [];
  
  if (!items) return assets;
  
  for (const item of items) {
    // If this is an asset, convert it
    if (item.Type === 'asset') {
      assets.push({
        id: item.Id,
        regNo: item.Registration || '',
        transporter: transporter,
        assetName: item.Name,
        status: 'Parked',
        date: '28/12/2024 - 00:00',
        panic: false
      });
    }
    
    // If this has nested items, recurse
    if (item.Items && item.Items.length > 0) {
      // Use site name as transporter if this is a site
      const newTransporter = (item.Type === 'site' || item.Type === 'orgsubgroup') 
        ? item.Name 
        : transporter;
      
      const nestedAssets = extractAssets(item.Items, newTransporter);
      assets.push(...nestedAssets);
    }
  }
  
  return assets;
}

// Find Chevron Nigeria Ltd in the data
function findChevronAssets(data) {
  for (const dealer of data.Items) {
    for (const org of dealer.Items) {
      if (org.Name === 'Africa - Best Practices - Chevron Nigeria Ltd') {
        return extractAssets(org.Items);
      }
    }
  }
  return [];
}

// Main execution
const POLL_INTERVAL_MS = 10 * 1000; // 10 seconds

function main() {
  const chevronAssets = findChevronAssets(sourceData);
  console.log(JSON.stringify(chevronAssets, null, 2));
  console.log(`\nTotal assets extracted: ${chevronAssets.length}`);
}

// Run immediately, then every 10 seconds
main();
setInterval(() => {
  main();
}, POLL_INTERVAL_MS);