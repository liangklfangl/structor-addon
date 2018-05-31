{
    "reducersFilePath": "/Users/qinliang.ql/Desktop/structor-starter/.structor/app/reducers.js",
    "reducersSourceCode": "\nexport default {\n};\n",
    "sagasFilePath": "/Users/qinliang.ql/Desktop/structor-starter/.structor/app/sagas.js",
    "sagasSourceCode": "\nexport default [];\n\n",
    // components
    "components": {
      "Link": {
        "importPath": "react-router",
        "name": "Link",
        "isLibMember": true,
        "defaults": [
          {
            "type": "Link",
            "props": {
              "to": "/main"
            },
            "children": [
              {
                "type": "span",
                "text": "Link to /main"
              }
            ],
            "variant": "default"
          }
        ]
      },
      "IndexLink": {
        "importPath": "react-router",
        "name": "IndexLink",
        "isLibMember": true,
        "defaults": [
          {
            "type": "IndexLink",
            "props": {
              "to": "/main"
            },
            "children": [
              {
                "type": "span",
                "text": "IndexLink to /main"
              }
            ],
            "variant": "default"
          }
        ]
      },
      "DatePicker": {
        "importPath": "antd",
        "name": "DatePicker",
        "isLibMember": true,
        "defaults": [
          {
            "type": "DatePicker",
            "variant": "default",
            "children": []
          }
        ]
      },
      "Button": {
        "importPath": "antd",
        "name": "Button",
        "isLibMember": true,
        "defaults": [
          {
            "type": "Button",
            "variant": "default",
            "children": []
          }
        ]
      },
      "Pagination": {
        "importPath": "antd",
        "name": "Pagination",
        "isLibMember": true,
        "defaults": [
          {
            "type": "Pagination",
            "variant": "default",
            "children": []
          }
        ]
      }
    },
    // modules
    "modules": {
      "DataAware": {
        "importPath": "modules/DataAware",
        "absolutePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/DataAware",
        "name": "DataAware",
        "components": {
          "DataList": {
            "importPath": "modules/DataAware/components/DataList",
            "absolutePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/DataAware/components/DataList",
            "name": "DataList",
            "defaults": [
              {
                "type": "DataList",
                "variant": "default",
                "children": [],
                "namespace": "DataAware",
                "props": {}
              },
              {
                "type": "DataList",
                "namespace": "DataAware",
                "variant": "3 items",
                "props": {
                  "data": [
                    {
                      "id": 1,
                      "primaryText": "New Item 1",
                      "secondaryText": ""
                    },
                    {
                      "id": 2,
                      "primaryText": "New Item 2",
                      "secondaryText": ""
                    },
                    {
                      "id": 3,
                      "primaryText": "New Item 3",
                      "secondaryText": ""
                    }
                  ]
                },
                "children": []
              }
            ],
            "absoluteIndexFilePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/DataAware/components/DataList/index.js"
          }
        },
        "indexSourceCode": "import DataList from './components/DataList';\n                \nexport {\n    DataList\n};\n",
        "indexFilePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/DataAware/index.js"
      },
      "MUIIcons": {
        "importPath": "modules/MUIIcons",
        "absolutePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/MUIIcons",
        "name": "MUIIcons",
        "components": {
          "AccessAlarmIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AccessAlarmIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AccessAlarmIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AccessAlarmsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AccessAlarmsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AccessAlarmsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AccessibilityIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AccessibilityIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AccessibilityIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AccessibleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AccessibleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AccessibleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AccessTimeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AccessTimeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AccessTimeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AccountBalanceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AccountBalanceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AccountBalanceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AccountBalanceWalletIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AccountBalanceWalletIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AccountBalanceWalletIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AccountBoxIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AccountBoxIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AccountBoxIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AccountCircleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AccountCircleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AccountCircleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AcUnitIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AcUnitIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AcUnitIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AdbIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AdbIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AdbIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddIcon",
                "variant": "default",
                "props": {},
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddAlarmIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddAlarmIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddAlarmIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddAlertIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddAlertIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddAlertIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddAPhotoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddAPhotoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddAPhotoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddBoxIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddBoxIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddBoxIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddCircleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddCircleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddCircleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddCircleOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddCircleOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddCircleOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddLocationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddLocationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddLocationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddShoppingCartIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddShoppingCartIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddShoppingCartIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddToPhotosIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddToPhotosIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddToPhotosIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AddToQueueIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AddToQueueIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AddToQueueIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AdjustIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AdjustIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AdjustIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirlineSeatFlatIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirlineSeatFlatIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirlineSeatFlatIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirlineSeatFlatAngledIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirlineSeatFlatAngledIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirlineSeatFlatAngledIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirlineSeatIndividualSuiteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirlineSeatIndividualSuiteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirlineSeatIndividualSuiteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirlineSeatLegroomExtraIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirlineSeatLegroomExtraIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirlineSeatLegroomExtraIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirlineSeatLegroomNormalIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirlineSeatLegroomNormalIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirlineSeatLegroomNormalIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirlineSeatLegroomReducedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirlineSeatLegroomReducedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirlineSeatLegroomReducedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirlineSeatReclineExtraIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirlineSeatReclineExtraIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirlineSeatReclineExtraIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirlineSeatReclineNormalIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirlineSeatReclineNormalIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirlineSeatReclineNormalIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirplanemodeActiveIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirplanemodeActiveIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirplanemodeActiveIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirplanemodeInactiveIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirplanemodeInactiveIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirplanemodeInactiveIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirplayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirplayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirplayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AirportShuttleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AirportShuttleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AirportShuttleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AlarmIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AlarmIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AlarmIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AlarmAddIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AlarmAddIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AlarmAddIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AlarmOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AlarmOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AlarmOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AlarmOnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AlarmOnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AlarmOnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AlbumIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AlbumIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AlbumIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AllInclusiveIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AllInclusiveIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AllInclusiveIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AllOutIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AllOutIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AllOutIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AndroidIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AndroidIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AndroidIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AnnouncementIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AnnouncementIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AnnouncementIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AppsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AppsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AppsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ArchiveIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ArchiveIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ArchiveIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ArrowBackIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ArrowBackIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ArrowBackIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ArrowDownwardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ArrowDownwardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ArrowDownwardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ArrowDropDownIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ArrowDropDownIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ArrowDropDownIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ArrowDropDownCircleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ArrowDropDownCircleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ArrowDropDownCircleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ArrowDropUpIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ArrowDropUpIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ArrowDropUpIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ArrowForwardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ArrowForwardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ArrowForwardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ArrowUpwardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ArrowUpwardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ArrowUpwardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ArtTrackIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ArtTrackIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ArtTrackIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AspectRatioIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AspectRatioIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AspectRatioIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AssessmentIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AssessmentIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AssessmentIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AssignmentIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AssignmentIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AssignmentIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AssignmentIndIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AssignmentIndIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AssignmentIndIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AssignmentLateIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AssignmentLateIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AssignmentLateIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AssignmentReturnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AssignmentReturnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AssignmentReturnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AssignmentReturnedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AssignmentReturnedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AssignmentReturnedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AssignmentTurnedInIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AssignmentTurnedInIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AssignmentTurnedInIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AssistantIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AssistantIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AssistantIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AssistantPhotoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AssistantPhotoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AssistantPhotoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AttachFileIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AttachFileIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AttachFileIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AttachmentIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AttachmentIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AttachmentIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AttachMoneyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AttachMoneyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AttachMoneyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AudiotrackIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AudiotrackIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AudiotrackIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AutorenewIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AutorenewIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AutorenewIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "AvTimerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "AvTimerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "AvTimerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BackspaceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BackspaceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BackspaceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BackupIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BackupIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BackupIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Battery20Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Battery20Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Battery20Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Battery30Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Battery30Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Battery30Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Battery50Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Battery50Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Battery50Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Battery60Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Battery60Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Battery60Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Battery80Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Battery80Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Battery80Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Battery90Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Battery90Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Battery90Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryAlertIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryAlertIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryAlertIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryCharging20Icon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryCharging20Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryCharging20Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryCharging30Icon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryCharging30Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryCharging30Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryCharging50Icon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryCharging50Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryCharging50Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryCharging60Icon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryCharging60Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryCharging60Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryCharging80Icon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryCharging80Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryCharging80Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryCharging90Icon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryCharging90Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryCharging90Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryChargingFullIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryChargingFullIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryChargingFullIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryFullIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryFullIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryFullIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryStdIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryStdIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryStdIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BatteryUnknownIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BatteryUnknownIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BatteryUnknownIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BeachAccessIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BeachAccessIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BeachAccessIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BeenhereIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BeenhereIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BeenhereIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BlockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BlockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BlockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BluetoothIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BluetoothIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BluetoothIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BluetoothAudioIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BluetoothAudioIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BluetoothAudioIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BluetoothConnectedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BluetoothConnectedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BluetoothConnectedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BluetoothDisabledIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BluetoothDisabledIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BluetoothDisabledIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BluetoothSearchingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BluetoothSearchingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BluetoothSearchingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BlurCircularIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BlurCircularIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BlurCircularIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BlurLinearIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BlurLinearIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BlurLinearIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BlurOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BlurOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BlurOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BlurOnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BlurOnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BlurOnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BookIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BookIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BookIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BookmarkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BookmarkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BookmarkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BookmarkBorderIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BookmarkBorderIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BookmarkBorderIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderAllIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderAllIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderAllIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderBottomIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderBottomIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderBottomIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderClearIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderClearIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderClearIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderColorIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderColorIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderColorIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderHorizontalIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderHorizontalIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderHorizontalIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderInnerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderInnerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderInnerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderLeftIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderLeftIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderLeftIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderOuterIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderOuterIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderOuterIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderRightIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderRightIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderRightIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderStyleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderStyleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderStyleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderTopIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderTopIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderTopIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BorderVerticalIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BorderVerticalIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BorderVerticalIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BrandingWatermarkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BrandingWatermarkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BrandingWatermarkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Brightness1Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Brightness1Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Brightness1Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Brightness2Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Brightness2Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Brightness2Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Brightness3Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Brightness3Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Brightness3Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Brightness4Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Brightness4Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Brightness4Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Brightness5Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Brightness5Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Brightness5Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Brightness6Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Brightness6Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Brightness6Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Brightness7Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Brightness7Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Brightness7Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BrightnessAutoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BrightnessAutoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BrightnessAutoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BrightnessHighIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BrightnessHighIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BrightnessHighIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BrightnessLowIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BrightnessLowIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BrightnessLowIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BrightnessMediumIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BrightnessMediumIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BrightnessMediumIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BrokenImageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BrokenImageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BrokenImageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BrushIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BrushIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BrushIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BubbleChartIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BubbleChartIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BubbleChartIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BugReportIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BugReportIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BugReportIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BuildIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BuildIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BuildIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BurstModeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BurstModeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BurstModeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BusinessIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BusinessIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BusinessIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "BusinessCenterIcon": {
            "importPath": "modules/MUIIcons",
            "name": "BusinessCenterIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "BusinessCenterIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CachedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CachedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CachedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CakeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CakeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CakeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CallIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CallIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CallIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CallEndIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CallEndIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CallEndIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CallMadeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CallMadeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CallMadeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CallMergeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CallMergeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CallMergeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CallMissedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CallMissedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CallMissedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CallMissedOutgoingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CallMissedOutgoingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CallMissedOutgoingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CallReceivedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CallReceivedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CallReceivedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CallSplitIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CallSplitIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CallSplitIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CallToActionIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CallToActionIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CallToActionIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CameraIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CameraIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CameraIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CameraAltIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CameraAltIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CameraAltIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CameraEnhanceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CameraEnhanceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CameraEnhanceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CameraFrontIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CameraFrontIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CameraFrontIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CameraRearIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CameraRearIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CameraRearIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CameraRollIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CameraRollIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CameraRollIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CancelIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CancelIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CancelIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CardGiftcardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CardGiftcardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CardGiftcardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CardMembershipIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CardMembershipIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CardMembershipIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CardTravelIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CardTravelIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CardTravelIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CasinoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CasinoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CasinoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CastIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CastIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CastIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CastConnectedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CastConnectedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CastConnectedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CenterFocusStrongIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CenterFocusStrongIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CenterFocusStrongIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CenterFocusWeakIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CenterFocusWeakIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CenterFocusWeakIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ChangeHistoryIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ChangeHistoryIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ChangeHistoryIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ChatIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ChatIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ChatIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ChatBubbleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ChatBubbleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ChatBubbleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ChatBubbleOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ChatBubbleOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ChatBubbleOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CheckIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CheckIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CheckIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CheckBoxIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CheckBoxIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CheckBoxIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CheckBoxOutlineBlankIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CheckBoxOutlineBlankIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CheckBoxOutlineBlankIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CheckCircleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CheckCircleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CheckCircleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ChevronLeftIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ChevronLeftIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ChevronLeftIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ChevronRightIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ChevronRightIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ChevronRightIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ChildCareIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ChildCareIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ChildCareIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ChildFriendlyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ChildFriendlyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ChildFriendlyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ChromeReaderModeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ChromeReaderModeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ChromeReaderModeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ClassIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ClassIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ClassIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ClearIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ClearIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ClearIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ClearAllIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ClearAllIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ClearAllIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CloseIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CloseIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CloseIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ClosedCaptionIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ClosedCaptionIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ClosedCaptionIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CloudIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CloudIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CloudIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CloudCircleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CloudCircleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CloudCircleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CloudDoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CloudDoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CloudDoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CloudDownloadIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CloudDownloadIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CloudDownloadIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CloudOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CloudOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CloudOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CloudQueueIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CloudQueueIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CloudQueueIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CloudUploadIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CloudUploadIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CloudUploadIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CodeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CodeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CodeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CollectionsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CollectionsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CollectionsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CollectionsBookmarkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CollectionsBookmarkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CollectionsBookmarkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ColorizeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ColorizeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ColorizeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ColorLensIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ColorLensIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ColorLensIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CommentIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CommentIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CommentIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CompareIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CompareIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CompareIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CompareArrowsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CompareArrowsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CompareArrowsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ComputerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ComputerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ComputerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ConfirmationNumberIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ConfirmationNumberIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ConfirmationNumberIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ContactMailIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ContactMailIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ContactMailIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ContactPhoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ContactPhoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ContactPhoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ContactsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ContactsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ContactsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ContentCopyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ContentCopyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ContentCopyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ContentCutIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ContentCutIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ContentCutIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ContentPasteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ContentPasteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ContentPasteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ControlPointIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ControlPointIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ControlPointIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ControlPointDuplicateIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ControlPointDuplicateIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ControlPointDuplicateIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CopyrightIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CopyrightIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CopyrightIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CreateIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CreateIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CreateIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CreateNewFolderIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CreateNewFolderIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CreateNewFolderIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CreditCardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CreditCardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CreditCardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CropIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CropIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CropIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Crop169Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Crop169Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Crop169Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Crop32Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Crop32Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Crop32Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Crop54Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Crop54Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Crop54Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Crop75Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Crop75Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Crop75Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CropDinIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CropDinIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CropDinIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CropFreeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CropFreeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CropFreeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CropLandscapeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CropLandscapeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CropLandscapeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CropOriginalIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CropOriginalIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CropOriginalIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CropPortraitIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CropPortraitIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CropPortraitIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CropRotateIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CropRotateIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CropRotateIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "CropSquareIcon": {
            "importPath": "modules/MUIIcons",
            "name": "CropSquareIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "CropSquareIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DashboardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DashboardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DashboardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DataUsageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DataUsageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DataUsageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DateRangeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DateRangeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DateRangeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DehazeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DehazeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DehazeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DeleteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DeleteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DeleteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DeleteForeverIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DeleteForeverIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DeleteForeverIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DeleteSweepIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DeleteSweepIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DeleteSweepIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DescriptionIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DescriptionIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DescriptionIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DesktopMacIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DesktopMacIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DesktopMacIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DesktopWindowsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DesktopWindowsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DesktopWindowsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DetailsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DetailsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DetailsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DeveloperBoardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DeveloperBoardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DeveloperBoardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DeveloperModeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DeveloperModeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DeveloperModeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DeviceHubIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DeviceHubIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DeviceHubIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DevicesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DevicesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DevicesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DevicesOtherIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DevicesOtherIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DevicesOtherIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DialerSipIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DialerSipIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DialerSipIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DialpadIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DialpadIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DialpadIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DirectionsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DirectionsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DirectionsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DirectionsBikeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DirectionsBikeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DirectionsBikeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DirectionsBoatIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DirectionsBoatIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DirectionsBoatIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DirectionsBusIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DirectionsBusIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DirectionsBusIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DirectionsCarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DirectionsCarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DirectionsCarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DirectionsRailwayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DirectionsRailwayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DirectionsRailwayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DirectionsRunIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DirectionsRunIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DirectionsRunIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DirectionsSubwayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DirectionsSubwayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DirectionsSubwayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DirectionsTransitIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DirectionsTransitIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DirectionsTransitIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DirectionsWalkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DirectionsWalkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DirectionsWalkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DiscFullIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DiscFullIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DiscFullIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DnsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DnsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DnsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DomainIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DomainIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DomainIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DoneAllIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DoneAllIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DoneAllIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DoNotDisturbIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DoNotDisturbIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DoNotDisturbIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DoNotDisturbAltIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DoNotDisturbAltIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DoNotDisturbAltIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DoNotDisturbOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DoNotDisturbOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DoNotDisturbOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DoNotDisturbOnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DoNotDisturbOnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DoNotDisturbOnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DonutLargeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DonutLargeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DonutLargeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DonutSmallIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DonutSmallIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DonutSmallIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DraftsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DraftsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DraftsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DragHandleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DragHandleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DragHandleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DriveEtaIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DriveEtaIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DriveEtaIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "DvrIcon": {
            "importPath": "modules/MUIIcons",
            "name": "DvrIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "DvrIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EditIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EditIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EditIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EditLocationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EditLocationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EditLocationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EjectIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EjectIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EjectIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EmailIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EmailIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EmailIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EnhancedEncryptionIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EnhancedEncryptionIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EnhancedEncryptionIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EqualizerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EqualizerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EqualizerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ErrorIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ErrorIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ErrorIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ErrorOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ErrorOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ErrorOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EuroSymbolIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EuroSymbolIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EuroSymbolIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EventIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EventIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EventIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EventAvailableIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EventAvailableIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EventAvailableIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EventBusyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EventBusyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EventBusyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EventNoteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EventNoteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EventNoteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EventSeatIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EventSeatIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EventSeatIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "EvStationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "EvStationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "EvStationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExitToAppIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ExitToAppIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExitToAppIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExpandLessIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ExpandLessIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExpandLessIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExpandMoreIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ExpandMoreIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExpandMoreIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExplicitIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ExplicitIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExplicitIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExploreIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ExploreIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExploreIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExposureIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ExposureIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExposureIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExposureNeg1Icon": {
            "importPath": "modules/MUIIcons",
            "name": "ExposureNeg1Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExposureNeg1Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExposureNeg2Icon": {
            "importPath": "modules/MUIIcons",
            "name": "ExposureNeg2Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExposureNeg2Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExposurePlus1Icon": {
            "importPath": "modules/MUIIcons",
            "name": "ExposurePlus1Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExposurePlus1Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExposurePlus2Icon": {
            "importPath": "modules/MUIIcons",
            "name": "ExposurePlus2Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExposurePlus2Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExposureZeroIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ExposureZeroIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExposureZeroIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ExtensionIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ExtensionIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ExtensionIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FaceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FaceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FaceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FastForwardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FastForwardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FastForwardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FastRewindIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FastRewindIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FastRewindIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FavoriteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FavoriteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FavoriteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FavoriteBorderIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FavoriteBorderIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FavoriteBorderIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FeaturedPlayListIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FeaturedPlayListIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FeaturedPlayListIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FeaturedVideoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FeaturedVideoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FeaturedVideoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FeedbackIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FeedbackIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FeedbackIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FiberDvrIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FiberDvrIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FiberDvrIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FiberManualRecordIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FiberManualRecordIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FiberManualRecordIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FiberNewIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FiberNewIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FiberNewIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FiberPinIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FiberPinIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FiberPinIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FiberSmartRecordIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FiberSmartRecordIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FiberSmartRecordIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FileDownloadIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FileDownloadIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FileDownloadIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FileUploadIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FileUploadIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FileUploadIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FilterIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FilterIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FilterIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Filter1Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Filter1Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Filter1Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Filter2Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Filter2Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Filter2Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Filter3Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Filter3Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Filter3Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Filter4Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Filter4Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Filter4Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Filter5Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Filter5Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Filter5Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Filter6Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Filter6Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Filter6Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Filter7Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Filter7Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Filter7Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Filter8Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Filter8Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Filter8Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Filter9Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Filter9Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Filter9Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Filter9PlusIcon": {
            "importPath": "modules/MUIIcons",
            "name": "Filter9PlusIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Filter9PlusIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FilterBAndWIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FilterBAndWIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FilterBAndWIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FilterCenterFocusIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FilterCenterFocusIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FilterCenterFocusIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FilterDramaIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FilterDramaIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FilterDramaIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FilterFramesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FilterFramesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FilterFramesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FilterHdrIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FilterHdrIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FilterHdrIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FilterListIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FilterListIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FilterListIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FilterNoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FilterNoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FilterNoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FilterTiltShiftIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FilterTiltShiftIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FilterTiltShiftIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FilterVintageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FilterVintageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FilterVintageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FindInPageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FindInPageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FindInPageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FindReplaceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FindReplaceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FindReplaceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FingerprintIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FingerprintIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FingerprintIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FirstPageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FirstPageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FirstPageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FitnessCenterIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FitnessCenterIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FitnessCenterIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlagIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlagIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlagIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlareIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlareIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlareIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlashAutoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlashAutoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlashAutoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlashOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlashOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlashOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlashOnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlashOnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlashOnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlightIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlightIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlightIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlightLandIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlightLandIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlightLandIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlightTakeoffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlightTakeoffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlightTakeoffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlipIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlipIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlipIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlipToBackIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlipToBackIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlipToBackIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FlipToFrontIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FlipToFrontIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FlipToFrontIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FolderIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FolderIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FolderIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FolderOpenIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FolderOpenIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FolderOpenIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FolderSharedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FolderSharedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FolderSharedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FolderSpecialIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FolderSpecialIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FolderSpecialIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FontDownloadIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FontDownloadIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FontDownloadIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatAlignCenterIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatAlignCenterIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatAlignCenterIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatAlignJustifyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatAlignJustifyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatAlignJustifyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatAlignLeftIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatAlignLeftIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatAlignLeftIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatAlignRightIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatAlignRightIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatAlignRightIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatBoldIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatBoldIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatBoldIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatClearIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatClearIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatClearIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatColorFillIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatColorFillIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatColorFillIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatColorResetIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatColorResetIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatColorResetIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatColorTextIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatColorTextIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatColorTextIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatIndentDecreaseIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatIndentDecreaseIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatIndentDecreaseIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatIndentIncreaseIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatIndentIncreaseIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatIndentIncreaseIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatItalicIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatItalicIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatItalicIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatLineSpacingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatLineSpacingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatLineSpacingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatListBulletedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatListBulletedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatListBulletedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatListNumberedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatListNumberedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatListNumberedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatPaintIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatPaintIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatPaintIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatQuoteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatQuoteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatQuoteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatShapesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatShapesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatShapesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatSizeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatSizeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatSizeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatStrikethroughIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatStrikethroughIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatStrikethroughIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatTextdirectionLToRIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatTextdirectionLToRIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatTextdirectionLToRIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatTextdirectionRToLIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatTextdirectionRToLIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatTextdirectionRToLIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FormatUnderlinedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FormatUnderlinedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FormatUnderlinedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ForumIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ForumIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ForumIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ForwardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ForwardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ForwardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Forward10Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Forward10Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Forward10Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Forward30Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Forward30Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Forward30Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Forward5Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Forward5Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Forward5Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FreeBreakfastIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FreeBreakfastIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FreeBreakfastIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FullscreenIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FullscreenIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FullscreenIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FullscreenExitIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FullscreenExitIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FullscreenExitIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "FunctionsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "FunctionsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "FunctionsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GamepadIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GamepadIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GamepadIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GamesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GamesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GamesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GavelIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GavelIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GavelIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GestureIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GestureIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GestureIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GetAppIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GetAppIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GetAppIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GifIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GifIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GifIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GolfCourseIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GolfCourseIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GolfCourseIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GpsFixedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GpsFixedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GpsFixedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GpsNotFixedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GpsNotFixedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GpsNotFixedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GpsOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GpsOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GpsOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GradeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GradeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GradeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GradientIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GradientIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GradientIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GrainIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GrainIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GrainIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GraphicEqIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GraphicEqIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GraphicEqIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GridOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GridOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GridOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GridOnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GridOnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GridOnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GroupIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GroupIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GroupIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GroupAddIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GroupAddIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GroupAddIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GroupWorkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GroupWorkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GroupWorkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "GTranslateIcon": {
            "importPath": "modules/MUIIcons",
            "name": "GTranslateIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "GTranslateIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HdIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HdIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HdIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HdrOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HdrOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HdrOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HdrOnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HdrOnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HdrOnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HdrStrongIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HdrStrongIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HdrStrongIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HdrWeakIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HdrWeakIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HdrWeakIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HeadsetIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HeadsetIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HeadsetIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HeadsetMicIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HeadsetMicIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HeadsetMicIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HealingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HealingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HealingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HearingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HearingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HearingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HelpIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HelpIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HelpIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HelpOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HelpOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HelpOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HighlightIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HighlightIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HighlightIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HighlightOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HighlightOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HighlightOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HighQualityIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HighQualityIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HighQualityIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HistoryIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HistoryIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HistoryIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HomeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HomeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HomeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HotelIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HotelIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HotelIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HotTubIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HotTubIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HotTubIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HourglassEmptyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HourglassEmptyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HourglassEmptyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HourglassFullIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HourglassFullIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HourglassFullIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HttpIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HttpIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HttpIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "HttpsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "HttpsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "HttpsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ImageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ImageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ImageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ImageAspectRatioIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ImageAspectRatioIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ImageAspectRatioIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ImportantDevicesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ImportantDevicesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ImportantDevicesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ImportContactsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ImportContactsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ImportContactsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ImportExportIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ImportExportIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ImportExportIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InboxIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InboxIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InboxIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "IndeterminateCheckBoxIcon": {
            "importPath": "modules/MUIIcons",
            "name": "IndeterminateCheckBoxIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "IndeterminateCheckBoxIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InfoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InfoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InfoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InfoOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InfoOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InfoOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InputIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InputIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InputIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InsertChartIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InsertChartIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InsertChartIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InsertCommentIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InsertCommentIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InsertCommentIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InsertDriveFileIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InsertDriveFileIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InsertDriveFileIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InsertEmoticonIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InsertEmoticonIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InsertEmoticonIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InsertInvitationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InsertInvitationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InsertInvitationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InsertLinkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InsertLinkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InsertLinkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InsertPhotoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InsertPhotoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InsertPhotoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InvertColorsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InvertColorsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InvertColorsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "InvertColorsOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "InvertColorsOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "InvertColorsOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "IsoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "IsoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "IsoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardArrowDownIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardArrowDownIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardArrowDownIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardArrowLeftIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardArrowLeftIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardArrowLeftIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardArrowRightIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardArrowRightIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardArrowRightIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardArrowUpIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardArrowUpIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardArrowUpIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardBackspaceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardBackspaceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardBackspaceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardCapslockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardCapslockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardCapslockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardHideIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardHideIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardHideIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardReturnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardReturnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardReturnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardTabIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardTabIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardTabIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KeyboardVoiceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KeyboardVoiceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KeyboardVoiceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "KitchenIcon": {
            "importPath": "modules/MUIIcons",
            "name": "KitchenIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "KitchenIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LabelIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LabelIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LabelIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LabelOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LabelOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LabelOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LandscapeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LandscapeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LandscapeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LanguageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LanguageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LanguageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LaptopIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LaptopIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LaptopIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LaptopChromebookIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LaptopChromebookIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LaptopChromebookIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LaptopMacIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LaptopMacIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LaptopMacIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LaptopWindowsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LaptopWindowsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LaptopWindowsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LastPageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LastPageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LastPageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LaunchIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LaunchIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LaunchIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LayersIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LayersIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LayersIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LayersClearIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LayersClearIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LayersClearIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LeakAddIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LeakAddIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LeakAddIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LeakRemoveIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LeakRemoveIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LeakRemoveIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LensIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LensIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LensIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LibraryAddIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LibraryAddIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LibraryAddIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LibraryBooksIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LibraryBooksIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LibraryBooksIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LibraryMusicIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LibraryMusicIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LibraryMusicIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LightbulbOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LightbulbOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LightbulbOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LinearScaleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LinearScaleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LinearScaleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LineStyleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LineStyleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LineStyleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LineWeightIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LineWeightIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LineWeightIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LinkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LinkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LinkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LinkedCameraIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LinkedCameraIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LinkedCameraIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ListIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ListIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ListIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LiveHelpIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LiveHelpIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LiveHelpIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LiveTvIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LiveTvIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LiveTvIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalActivityIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalActivityIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalActivityIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalAirportIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalAirportIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalAirportIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalAtmIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalAtmIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalAtmIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalBarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalBarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalBarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalCafeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalCafeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalCafeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalCarWashIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalCarWashIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalCarWashIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalConvenienceStoreIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalConvenienceStoreIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalConvenienceStoreIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalDiningIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalDiningIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalDiningIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalDrinkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalDrinkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalDrinkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalFloristIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalFloristIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalFloristIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalGasStationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalGasStationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalGasStationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalGroceryStoreIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalGroceryStoreIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalGroceryStoreIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalHospitalIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalHospitalIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalHospitalIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalHotelIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalHotelIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalHotelIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalLaundryServiceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalLaundryServiceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalLaundryServiceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalLibraryIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalLibraryIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalLibraryIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalMallIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalMallIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalMallIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalMoviesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalMoviesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalMoviesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalOfferIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalOfferIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalOfferIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalParkingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalParkingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalParkingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalPharmacyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalPharmacyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalPharmacyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalPhoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalPhoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalPhoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalPizzaIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalPizzaIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalPizzaIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalPlayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalPlayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalPlayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalPostOfficeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalPostOfficeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalPostOfficeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalPrintshopIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalPrintshopIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalPrintshopIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalSeeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalSeeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalSeeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalShippingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalShippingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalShippingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocalTaxiIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocalTaxiIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocalTaxiIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocationCityIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocationCityIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocationCityIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocationDisabledIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocationDisabledIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocationDisabledIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocationOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocationOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocationOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocationOnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocationOnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocationOnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LocationSearchingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LocationSearchingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LocationSearchingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LockOpenIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LockOpenIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LockOpenIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LockOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LockOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LockOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LooksIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LooksIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LooksIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Looks3Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Looks3Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Looks3Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Looks4Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Looks4Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Looks4Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Looks5Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Looks5Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Looks5Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Looks6Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Looks6Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Looks6Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LooksOneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LooksOneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LooksOneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LooksTwoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LooksTwoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LooksTwoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LoopIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LoopIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LoopIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LoupeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LoupeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LoupeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LowPriorityIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LowPriorityIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LowPriorityIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "LoyaltyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "LoyaltyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "LoyaltyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MailIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MailIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MailIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MailOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MailOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MailOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MapIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MapIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MapIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MarkunreadIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MarkunreadIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MarkunreadIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MarkunreadMailboxIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MarkunreadMailboxIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MarkunreadMailboxIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MemoryIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MemoryIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MemoryIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MenuIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MenuIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MenuIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MergeTypeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MergeTypeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MergeTypeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MessageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MessageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MessageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MicIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MicIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MicIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MicNoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MicNoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MicNoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MicOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MicOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MicOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MmsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MmsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MmsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ModeCommentIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ModeCommentIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ModeCommentIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ModeEditIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ModeEditIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ModeEditIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MonetizationOnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MonetizationOnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MonetizationOnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MoneyOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MoneyOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MoneyOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MonochromePhotosIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MonochromePhotosIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MonochromePhotosIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MoodIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MoodIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MoodIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MoodBadIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MoodBadIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MoodBadIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MoreIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MoreIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MoreIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MoreHorizIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MoreHorizIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MoreHorizIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MoreVertIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MoreVertIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MoreVertIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MotorcycleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MotorcycleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MotorcycleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MouseIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MouseIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MouseIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MoveToInboxIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MoveToInboxIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MoveToInboxIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MovieIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MovieIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MovieIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MovieCreationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MovieCreationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MovieCreationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MovieFilterIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MovieFilterIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MovieFilterIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MultilineChartIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MultilineChartIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MultilineChartIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MusicNoteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MusicNoteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MusicNoteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MusicVideoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MusicVideoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MusicVideoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "MyLocationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "MyLocationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "MyLocationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NatureIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NatureIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NatureIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NaturePeopleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NaturePeopleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NaturePeopleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NavigateBeforeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NavigateBeforeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NavigateBeforeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NavigateNextIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NavigateNextIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NavigateNextIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NavigationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NavigationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NavigationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NearMeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NearMeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NearMeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NetworkCellIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NetworkCellIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NetworkCellIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NetworkCheckIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NetworkCheckIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NetworkCheckIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NetworkLockedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NetworkLockedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NetworkLockedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NetworkWifiIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NetworkWifiIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NetworkWifiIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NewReleasesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NewReleasesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NewReleasesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NextWeekIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NextWeekIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NextWeekIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NfcIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NfcIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NfcIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NoEncryptionIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NoEncryptionIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NoEncryptionIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NoSimIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NoSimIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NoSimIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NoteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NoteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NoteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NoteAddIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NoteAddIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NoteAddIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NotificationsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NotificationsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NotificationsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NotificationsActiveIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NotificationsActiveIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NotificationsActiveIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NotificationsNoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NotificationsNoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NotificationsNoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NotificationsOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NotificationsOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NotificationsOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NotificationsPausedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NotificationsPausedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NotificationsPausedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "NotInterestedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "NotInterestedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "NotInterestedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "OfflinePinIcon": {
            "importPath": "modules/MUIIcons",
            "name": "OfflinePinIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "OfflinePinIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "OndemandVideoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "OndemandVideoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "OndemandVideoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "OpacityIcon": {
            "importPath": "modules/MUIIcons",
            "name": "OpacityIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "OpacityIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "OpenInBrowserIcon": {
            "importPath": "modules/MUIIcons",
            "name": "OpenInBrowserIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "OpenInBrowserIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "OpenInNewIcon": {
            "importPath": "modules/MUIIcons",
            "name": "OpenInNewIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "OpenInNewIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "OpenWithIcon": {
            "importPath": "modules/MUIIcons",
            "name": "OpenWithIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "OpenWithIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PagesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PagesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PagesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PageviewIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PageviewIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PageviewIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PaletteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PaletteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PaletteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PanoramaIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PanoramaIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PanoramaIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PanoramaFishEyeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PanoramaFishEyeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PanoramaFishEyeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PanoramaHorizontalIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PanoramaHorizontalIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PanoramaHorizontalIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PanoramaVerticalIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PanoramaVerticalIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PanoramaVerticalIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PanoramaWideAngleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PanoramaWideAngleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PanoramaWideAngleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PanToolIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PanToolIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PanToolIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PartyModeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PartyModeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PartyModeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PauseIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PauseIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PauseIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PauseCircleFilledIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PauseCircleFilledIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PauseCircleFilledIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PauseCircleOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PauseCircleOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PauseCircleOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PaymentIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PaymentIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PaymentIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PeopleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PeopleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PeopleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PeopleOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PeopleOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PeopleOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PermCameraMicIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PermCameraMicIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PermCameraMicIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PermContactCalendarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PermContactCalendarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PermContactCalendarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PermDataSettingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PermDataSettingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PermDataSettingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PermDeviceInformationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PermDeviceInformationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PermDeviceInformationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PermIdentityIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PermIdentityIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PermIdentityIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PermMediaIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PermMediaIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PermMediaIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PermPhoneMsgIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PermPhoneMsgIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PermPhoneMsgIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PermScanWifiIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PermScanWifiIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PermScanWifiIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PersonIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PersonIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PersonIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PersonAddIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PersonAddIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PersonAddIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PersonalVideoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PersonalVideoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PersonalVideoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PersonOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PersonOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PersonOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PersonPinIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PersonPinIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PersonPinIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PersonPinCircleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PersonPinCircleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PersonPinCircleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PetsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PetsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PetsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhoneAndroidIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhoneAndroidIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhoneAndroidIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhoneBluetoothSpeakerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhoneBluetoothSpeakerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhoneBluetoothSpeakerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhoneForwardedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhoneForwardedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhoneForwardedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhoneInTalkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhoneInTalkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhoneInTalkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhoneIphoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhoneIphoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhoneIphoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhonelinkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhonelinkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhonelinkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhonelinkEraseIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhonelinkEraseIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhonelinkEraseIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhonelinkLockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhonelinkLockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhonelinkLockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhonelinkOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhonelinkOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhonelinkOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhonelinkRingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhonelinkRingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhonelinkRingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhonelinkSetupIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhonelinkSetupIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhonelinkSetupIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhoneLockedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhoneLockedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhoneLockedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhoneMissedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhoneMissedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhoneMissedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhonePausedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhonePausedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhonePausedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhotoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhotoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhotoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhotoAlbumIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhotoAlbumIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhotoAlbumIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhotoCameraIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhotoCameraIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhotoCameraIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhotoFilterIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhotoFilterIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhotoFilterIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhotoLibraryIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhotoLibraryIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhotoLibraryIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhotoSizeSelectActualIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhotoSizeSelectActualIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhotoSizeSelectActualIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhotoSizeSelectLargeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhotoSizeSelectLargeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhotoSizeSelectLargeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PhotoSizeSelectSmallIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PhotoSizeSelectSmallIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PhotoSizeSelectSmallIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PictureAsPdfIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PictureAsPdfIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PictureAsPdfIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PictureInPictureIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PictureInPictureIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PictureInPictureIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PictureInPictureAltIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PictureInPictureAltIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PictureInPictureAltIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PieChartIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PieChartIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PieChartIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PieChartOutlinedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PieChartOutlinedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PieChartOutlinedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PinDropIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PinDropIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PinDropIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PlaceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PlaceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PlaceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PlayArrowIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PlayArrowIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PlayArrowIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PlayCircleFilledIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PlayCircleFilledIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PlayCircleFilledIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PlayCircleOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PlayCircleOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PlayCircleOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PlayForWorkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PlayForWorkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PlayForWorkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PlaylistAddIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PlaylistAddIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PlaylistAddIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PlaylistAddCheckIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PlaylistAddCheckIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PlaylistAddCheckIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PlaylistPlayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PlaylistPlayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PlaylistPlayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PlusOneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PlusOneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PlusOneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PollIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PollIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PollIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PolymerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PolymerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PolymerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PoolIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PoolIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PoolIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PortableWifiOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PortableWifiOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PortableWifiOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PortraitIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PortraitIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PortraitIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PowerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PowerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PowerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PowerInputIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PowerInputIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PowerInputIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PowerSettingsNewIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PowerSettingsNewIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PowerSettingsNewIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PregnantWomanIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PregnantWomanIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PregnantWomanIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PresentToAllIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PresentToAllIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PresentToAllIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PrintIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PrintIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PrintIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PriorityHighIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PriorityHighIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PriorityHighIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PublicIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PublicIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PublicIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "PublishIcon": {
            "importPath": "modules/MUIIcons",
            "name": "PublishIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "PublishIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "QueryBuilderIcon": {
            "importPath": "modules/MUIIcons",
            "name": "QueryBuilderIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "QueryBuilderIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "QuestionAnswerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "QuestionAnswerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "QuestionAnswerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "QueueIcon": {
            "importPath": "modules/MUIIcons",
            "name": "QueueIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "QueueIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "QueueMusicIcon": {
            "importPath": "modules/MUIIcons",
            "name": "QueueMusicIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "QueueMusicIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "QueuePlayNextIcon": {
            "importPath": "modules/MUIIcons",
            "name": "QueuePlayNextIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "QueuePlayNextIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RadioIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RadioIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RadioIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RadioButtonCheckedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RadioButtonCheckedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RadioButtonCheckedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RadioButtonUncheckedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RadioButtonUncheckedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RadioButtonUncheckedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RateReviewIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RateReviewIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RateReviewIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ReceiptIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ReceiptIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ReceiptIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RecentActorsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RecentActorsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RecentActorsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RecordVoiceOverIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RecordVoiceOverIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RecordVoiceOverIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RedeemIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RedeemIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RedeemIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RedoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RedoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RedoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RefreshIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RefreshIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RefreshIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RemoveIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RemoveIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RemoveIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RemoveCircleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RemoveCircleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RemoveCircleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RemoveCircleOutlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RemoveCircleOutlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RemoveCircleOutlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RemoveFromQueueIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RemoveFromQueueIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RemoveFromQueueIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RemoveRedEyeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RemoveRedEyeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RemoveRedEyeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RemoveShoppingCartIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RemoveShoppingCartIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RemoveShoppingCartIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ReorderIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ReorderIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ReorderIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RepeatIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RepeatIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RepeatIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RepeatOneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RepeatOneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RepeatOneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ReplayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ReplayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ReplayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Replay10Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Replay10Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Replay10Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Replay30Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Replay30Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Replay30Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Replay5Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Replay5Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Replay5Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ReplyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ReplyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ReplyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ReplyAllIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ReplyAllIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ReplyAllIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ReportIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ReportIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ReportIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ReportProblemIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ReportProblemIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ReportProblemIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RestaurantIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RestaurantIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RestaurantIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RestaurantMenuIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RestaurantMenuIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RestaurantMenuIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RestoreIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RestoreIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RestoreIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RestorePageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RestorePageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RestorePageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RingVolumeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RingVolumeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RingVolumeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RoomIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RoomIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RoomIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RoomServiceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RoomServiceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RoomServiceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Rotate90DegreesCcwIcon": {
            "importPath": "modules/MUIIcons",
            "name": "Rotate90DegreesCcwIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Rotate90DegreesCcwIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RotateLeftIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RotateLeftIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RotateLeftIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RotateRightIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RotateRightIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RotateRightIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RoundedCornerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RoundedCornerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RoundedCornerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RouterIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RouterIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RouterIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RowingIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RowingIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RowingIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RssFeedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RssFeedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RssFeedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "RvHookupIcon": {
            "importPath": "modules/MUIIcons",
            "name": "RvHookupIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "RvHookupIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SatelliteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SatelliteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SatelliteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SaveIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SaveIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SaveIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ScannerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ScannerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ScannerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ScheduleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ScheduleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ScheduleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SchoolIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SchoolIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SchoolIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ScreenLockLandscapeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ScreenLockLandscapeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ScreenLockLandscapeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ScreenLockPortraitIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ScreenLockPortraitIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ScreenLockPortraitIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ScreenLockRotationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ScreenLockRotationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ScreenLockRotationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ScreenRotationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ScreenRotationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ScreenRotationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ScreenShareIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ScreenShareIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ScreenShareIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SdCardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SdCardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SdCardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SdStorageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SdStorageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SdStorageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SearchIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SearchIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SearchIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SecurityIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SecurityIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SecurityIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SelectAllIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SelectAllIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SelectAllIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SendIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SendIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SendIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SentimentDissatisfiedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SentimentDissatisfiedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SentimentDissatisfiedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SentimentNeutralIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SentimentNeutralIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SentimentNeutralIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SentimentSatisfiedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SentimentSatisfiedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SentimentSatisfiedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SentimentVeryDissatisfiedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SentimentVeryDissatisfiedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SentimentVeryDissatisfiedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SentimentVerySatisfiedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SentimentVerySatisfiedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SentimentVerySatisfiedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsApplicationsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsApplicationsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsApplicationsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsBackupRestoreIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsBackupRestoreIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsBackupRestoreIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsBluetoothIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsBluetoothIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsBluetoothIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsBrightnessIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsBrightnessIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsBrightnessIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsCellIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsCellIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsCellIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsEthernetIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsEthernetIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsEthernetIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsInputAntennaIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsInputAntennaIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsInputAntennaIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsInputComponentIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsInputComponentIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsInputComponentIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsInputCompositeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsInputCompositeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsInputCompositeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsInputHdmiIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsInputHdmiIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsInputHdmiIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsInputSvideoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsInputSvideoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsInputSvideoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsOverscanIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsOverscanIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsOverscanIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsPhoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsPhoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsPhoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsPowerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsPowerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsPowerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsRemoteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsRemoteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsRemoteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsSystemDaydreamIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsSystemDaydreamIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsSystemDaydreamIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SettingsVoiceIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SettingsVoiceIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SettingsVoiceIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ShareIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ShareIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ShareIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ShopIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ShopIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ShopIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ShoppingBasketIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ShoppingBasketIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ShoppingBasketIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ShoppingCartIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ShoppingCartIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ShoppingCartIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ShopTwoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ShopTwoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ShopTwoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ShortTextIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ShortTextIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ShortTextIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ShowChartIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ShowChartIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ShowChartIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ShuffleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ShuffleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ShuffleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellular0BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellular0BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellular0BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellular1BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellular1BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellular1BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellular2BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellular2BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellular2BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellular3BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellular3BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellular3BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellular4BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellular4BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellular4BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellularConnectedNoInternet0BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellularConnectedNoInternet0BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellularConnectedNoInternet0BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellularConnectedNoInternet1BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellularConnectedNoInternet1BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellularConnectedNoInternet1BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellularConnectedNoInternet2BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellularConnectedNoInternet2BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellularConnectedNoInternet2BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellularConnectedNoInternet3BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellularConnectedNoInternet3BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellularConnectedNoInternet3BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellularConnectedNoInternet4BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellularConnectedNoInternet4BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellularConnectedNoInternet4BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellularNoSimIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellularNoSimIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellularNoSimIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellularNullIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellularNullIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellularNullIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalCellularOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalCellularOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalCellularOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalWifi0BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalWifi0BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalWifi0BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalWifi1BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalWifi1BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalWifi1BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalWifi1BarLockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalWifi1BarLockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalWifi1BarLockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalWifi2BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalWifi2BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalWifi2BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalWifi2BarLockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalWifi2BarLockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalWifi2BarLockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalWifi3BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalWifi3BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalWifi3BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalWifi3BarLockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalWifi3BarLockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalWifi3BarLockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalWifi4BarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalWifi4BarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalWifi4BarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalWifi4BarLockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalWifi4BarLockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalWifi4BarLockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SignalWifiOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SignalWifiOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SignalWifiOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SimCardIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SimCardIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SimCardIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SimCardAlertIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SimCardAlertIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SimCardAlertIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SkipNextIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SkipNextIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SkipNextIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SkipPreviousIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SkipPreviousIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SkipPreviousIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SlideshowIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SlideshowIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SlideshowIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SlowMotionVideoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SlowMotionVideoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SlowMotionVideoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SmartphoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SmartphoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SmartphoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SmokeFreeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SmokeFreeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SmokeFreeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SmokingRoomsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SmokingRoomsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SmokingRoomsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SmsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SmsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SmsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SmsFailedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SmsFailedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SmsFailedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SnoozeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SnoozeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SnoozeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SortIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SortIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SortIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SortByAlphaIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SortByAlphaIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SortByAlphaIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SpaIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SpaIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SpaIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SpaceBarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SpaceBarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SpaceBarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SpeakerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SpeakerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SpeakerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SpeakerGroupIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SpeakerGroupIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SpeakerGroupIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SpeakerNotesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SpeakerNotesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SpeakerNotesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SpeakerNotesOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SpeakerNotesOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SpeakerNotesOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SpeakerPhoneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SpeakerPhoneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SpeakerPhoneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SpellcheckIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SpellcheckIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SpellcheckIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StarIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StarIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StarIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StarBorderIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StarBorderIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StarBorderIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StarHalfIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StarHalfIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StarHalfIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StarsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StarsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StarsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StayCurrentLandscapeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StayCurrentLandscapeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StayCurrentLandscapeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StayCurrentPortraitIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StayCurrentPortraitIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StayCurrentPortraitIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StayPrimaryLandscapeIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StayPrimaryLandscapeIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StayPrimaryLandscapeIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StayPrimaryPortraitIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StayPrimaryPortraitIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StayPrimaryPortraitIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StopIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StopIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StopIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StopScreenShareIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StopScreenShareIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StopScreenShareIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StorageIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StorageIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StorageIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StoreIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StoreIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StoreIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StoreMallDirectoryIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StoreMallDirectoryIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StoreMallDirectoryIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StraightenIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StraightenIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StraightenIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StreetviewIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StreetviewIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StreetviewIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StrikethroughSIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StrikethroughSIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StrikethroughSIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "StyleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "StyleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "StyleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SubdirectoryArrowLeftIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SubdirectoryArrowLeftIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SubdirectoryArrowLeftIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SubdirectoryArrowRightIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SubdirectoryArrowRightIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SubdirectoryArrowRightIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SubjectIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SubjectIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SubjectIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SubscriptionsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SubscriptionsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SubscriptionsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SubtitlesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SubtitlesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SubtitlesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SubwayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SubwayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SubwayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SupervisorAccountIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SupervisorAccountIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SupervisorAccountIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SurroundSoundIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SurroundSoundIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SurroundSoundIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SwapCallsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SwapCallsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SwapCallsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SwapHorizIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SwapHorizIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SwapHorizIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SwapVertIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SwapVertIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SwapVertIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SwapVerticalCircleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SwapVerticalCircleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SwapVerticalCircleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SwitchCameraIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SwitchCameraIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SwitchCameraIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SwitchVideoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SwitchVideoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SwitchVideoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SyncIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SyncIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SyncIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SyncDisabledIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SyncDisabledIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SyncDisabledIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SyncProblemIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SyncProblemIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SyncProblemIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SystemUpdateIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SystemUpdateIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SystemUpdateIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "SystemUpdateAltIcon": {
            "importPath": "modules/MUIIcons",
            "name": "SystemUpdateAltIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "SystemUpdateAltIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TabIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TabIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TabIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TabletIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TabletIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TabletIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TabletAndroidIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TabletAndroidIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TabletAndroidIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TabletMacIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TabletMacIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TabletMacIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TabUnselectedIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TabUnselectedIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TabUnselectedIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TagFacesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TagFacesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TagFacesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TapAndPlayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TapAndPlayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TapAndPlayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TerrainIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TerrainIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TerrainIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TextFieldsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TextFieldsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TextFieldsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TextFormatIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TextFormatIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TextFormatIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TextsmsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TextsmsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TextsmsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TextureIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TextureIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TextureIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TheatersIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TheatersIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TheatersIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ThreeDRotationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ThreeDRotationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ThreeDRotationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ThumbDownIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ThumbDownIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ThumbDownIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ThumbsUpDownIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ThumbsUpDownIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ThumbsUpDownIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ThumbUpIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ThumbUpIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ThumbUpIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TimelapseIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TimelapseIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TimelapseIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TimelineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TimelineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TimelineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TimerIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TimerIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TimerIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Timer10Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Timer10Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Timer10Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "Timer3Icon": {
            "importPath": "modules/MUIIcons",
            "name": "Timer3Icon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Timer3Icon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TimerOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TimerOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TimerOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TimeToLeaveIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TimeToLeaveIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TimeToLeaveIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TitleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TitleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TitleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TocIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TocIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TocIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TodayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TodayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TodayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TollIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TollIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TollIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TonalityIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TonalityIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TonalityIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TouchAppIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TouchAppIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TouchAppIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ToysIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ToysIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ToysIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TrackChangesIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TrackChangesIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TrackChangesIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TrafficIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TrafficIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TrafficIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TrainIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TrainIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TrainIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TramIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TramIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TramIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TransferWithinAStationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TransferWithinAStationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TransferWithinAStationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TransformIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TransformIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TransformIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TranslateIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TranslateIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TranslateIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TrendingDownIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TrendingDownIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TrendingDownIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TrendingFlatIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TrendingFlatIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TrendingFlatIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TrendingUpIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TrendingUpIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TrendingUpIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TuneIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TuneIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TuneIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TurnedInIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TurnedInIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TurnedInIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TurnedInNotIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TurnedInNotIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TurnedInNotIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "TvIcon": {
            "importPath": "modules/MUIIcons",
            "name": "TvIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TvIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "UnarchiveIcon": {
            "importPath": "modules/MUIIcons",
            "name": "UnarchiveIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "UnarchiveIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "UndoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "UndoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "UndoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "UnfoldLessIcon": {
            "importPath": "modules/MUIIcons",
            "name": "UnfoldLessIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "UnfoldLessIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "UnfoldMoreIcon": {
            "importPath": "modules/MUIIcons",
            "name": "UnfoldMoreIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "UnfoldMoreIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "UpdateIcon": {
            "importPath": "modules/MUIIcons",
            "name": "UpdateIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "UpdateIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "UsbIcon": {
            "importPath": "modules/MUIIcons",
            "name": "UsbIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "UsbIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VerifiedUserIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VerifiedUserIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VerifiedUserIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VerticalAlignBottomIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VerticalAlignBottomIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VerticalAlignBottomIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VerticalAlignCenterIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VerticalAlignCenterIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VerticalAlignCenterIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VerticalAlignTopIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VerticalAlignTopIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VerticalAlignTopIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VibrationIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VibrationIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VibrationIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VideoCallIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VideoCallIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VideoCallIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VideocamIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VideocamIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VideocamIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VideocamOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VideocamOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VideocamOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VideogameAssetIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VideogameAssetIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VideogameAssetIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VideoLabelIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VideoLabelIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VideoLabelIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VideoLibraryIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VideoLibraryIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VideoLibraryIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewAgendaIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewAgendaIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewAgendaIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewArrayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewArrayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewArrayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewCarouselIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewCarouselIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewCarouselIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewColumnIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewColumnIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewColumnIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewComfyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewComfyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewComfyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewCompactIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewCompactIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewCompactIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewDayIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewDayIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewDayIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewHeadlineIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewHeadlineIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewHeadlineIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewListIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewListIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewListIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewModuleIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewModuleIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewModuleIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewQuiltIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewQuiltIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewQuiltIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewStreamIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewStreamIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewStreamIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ViewWeekIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ViewWeekIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ViewWeekIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VignetteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VignetteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VignetteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VisibilityIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VisibilityIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VisibilityIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VisibilityOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VisibilityOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VisibilityOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VoiceChatIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VoiceChatIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VoiceChatIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VoicemailIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VoicemailIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VoicemailIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VolumeDownIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VolumeDownIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VolumeDownIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VolumeMuteIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VolumeMuteIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VolumeMuteIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VolumeOffIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VolumeOffIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VolumeOffIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VolumeUpIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VolumeUpIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VolumeUpIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VpnKeyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VpnKeyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VpnKeyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "VpnLockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "VpnLockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "VpnLockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WallpaperIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WallpaperIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WallpaperIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WarningIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WarningIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WarningIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WatchIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WatchIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WatchIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WatchLaterIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WatchLaterIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WatchLaterIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WbAutoIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WbAutoIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WbAutoIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WbCloudyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WbCloudyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WbCloudyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WbIncandescentIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WbIncandescentIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WbIncandescentIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WbIridescentIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WbIridescentIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WbIridescentIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WbSunnyIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WbSunnyIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WbSunnyIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WcIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WcIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WcIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WebIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WebIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WebIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WebAssetIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WebAssetIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WebAssetIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WeekendIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WeekendIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WeekendIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WhatshotIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WhatshotIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WhatshotIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WidgetsIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WidgetsIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WidgetsIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WifiIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WifiIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WifiIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WifiLockIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WifiLockIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WifiLockIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WifiTetheringIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WifiTetheringIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WifiTetheringIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WorkIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WorkIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WorkIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "WrapTextIcon": {
            "importPath": "modules/MUIIcons",
            "name": "WrapTextIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "WrapTextIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "YoutubeSearchedForIcon": {
            "importPath": "modules/MUIIcons",
            "name": "YoutubeSearchedForIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "YoutubeSearchedForIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ZoomInIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ZoomInIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ZoomInIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ZoomOutIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ZoomOutIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ZoomOutIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          },
          "ZoomOutMapIcon": {
            "importPath": "modules/MUIIcons",
            "name": "ZoomOutMapIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ZoomOutMapIcon",
                "variant": "default",
                "children": [],
                "namespace": "MUIIcons"
              }
            ]
          }
        },
        "indexSourceCode": "import  AccessAlarmIcon  from 'material-ui-icons/AccessAlarm';\nimport  AccessAlarmsIcon  from 'material-ui-icons/AccessAlarms';\nimport  AccessibilityIcon  from 'material-ui-icons/Accessibility';\nimport  AccessibleIcon  from 'material-ui-icons/Accessible';\nimport  AccessTimeIcon  from 'material-ui-icons/AccessTime';\nimport  AccountBalanceIcon  from 'material-ui-icons/AccountBalance';\nimport  AccountBalanceWalletIcon  from 'material-ui-icons/AccountBalanceWallet';\nimport  AccountBoxIcon  from 'material-ui-icons/AccountBox';\nimport  AccountCircleIcon  from 'material-ui-icons/AccountCircle';\nimport  AcUnitIcon  from 'material-ui-icons/AcUnit';\nimport  AdbIcon  from 'material-ui-icons/Adb';\nimport  AddIcon  from 'material-ui-icons/Add';\nimport  AddAlarmIcon  from 'material-ui-icons/AddAlarm';\nimport  AddAlertIcon  from 'material-ui-icons/AddAlert';\nimport  AddAPhotoIcon  from 'material-ui-icons/AddAPhoto';\nimport  AddBoxIcon  from 'material-ui-icons/AddBox';\nimport  AddCircleIcon  from 'material-ui-icons/AddCircle';\nimport  AddCircleOutlineIcon  from 'material-ui-icons/AddCircleOutline';\nimport  AddLocationIcon  from 'material-ui-icons/AddLocation';\nimport  AddShoppingCartIcon  from 'material-ui-icons/AddShoppingCart';\nimport  AddToPhotosIcon  from 'material-ui-icons/AddToPhotos';\nimport  AddToQueueIcon  from 'material-ui-icons/AddToQueue';\nimport  AdjustIcon  from 'material-ui-icons/Adjust';\nimport  AirlineSeatFlatIcon  from 'material-ui-icons/AirlineSeatFlat';\nimport  AirlineSeatFlatAngledIcon  from 'material-ui-icons/AirlineSeatFlatAngled';\nimport  AirlineSeatIndividualSuiteIcon  from 'material-ui-icons/AirlineSeatIndividualSuite';\nimport  AirlineSeatLegroomExtraIcon  from 'material-ui-icons/AirlineSeatLegroomExtra';\nimport  AirlineSeatLegroomNormalIcon  from 'material-ui-icons/AirlineSeatLegroomNormal';\nimport  AirlineSeatLegroomReducedIcon  from 'material-ui-icons/AirlineSeatLegroomReduced';\nimport  AirlineSeatReclineExtraIcon  from 'material-ui-icons/AirlineSeatReclineExtra';\nimport  AirlineSeatReclineNormalIcon  from 'material-ui-icons/AirlineSeatReclineNormal';\nimport  AirplanemodeActiveIcon  from 'material-ui-icons/AirplanemodeActive';\nimport  AirplanemodeInactiveIcon  from 'material-ui-icons/AirplanemodeInactive';\nimport  AirplayIcon  from 'material-ui-icons/Airplay';\nimport  AirportShuttleIcon  from 'material-ui-icons/AirportShuttle';\nimport  AlarmIcon  from 'material-ui-icons/Alarm';\nimport  AlarmAddIcon  from 'material-ui-icons/AlarmAdd';\nimport  AlarmOffIcon  from 'material-ui-icons/AlarmOff';\nimport  AlarmOnIcon  from 'material-ui-icons/AlarmOn';\nimport  AlbumIcon  from 'material-ui-icons/Album';\nimport  AllInclusiveIcon  from 'material-ui-icons/AllInclusive';\nimport  AllOutIcon  from 'material-ui-icons/AllOut';\nimport  AndroidIcon  from 'material-ui-icons/Android';\nimport  AnnouncementIcon  from 'material-ui-icons/Announcement';\nimport  AppsIcon  from 'material-ui-icons/Apps';\nimport  ArchiveIcon  from 'material-ui-icons/Archive';\nimport  ArrowBackIcon  from 'material-ui-icons/ArrowBack';\nimport  ArrowDownwardIcon  from 'material-ui-icons/ArrowDownward';\nimport  ArrowDropDownIcon  from 'material-ui-icons/ArrowDropDown';\nimport  ArrowDropDownCircleIcon  from 'material-ui-icons/ArrowDropDownCircle';\nimport  ArrowDropUpIcon  from 'material-ui-icons/ArrowDropUp';\nimport  ArrowForwardIcon  from 'material-ui-icons/ArrowForward';\nimport  ArrowUpwardIcon  from 'material-ui-icons/ArrowUpward';\nimport  ArtTrackIcon  from 'material-ui-icons/ArtTrack';\nimport  AspectRatioIcon  from 'material-ui-icons/AspectRatio';\nimport  AssessmentIcon  from 'material-ui-icons/Assessment';\nimport  AssignmentIcon  from 'material-ui-icons/Assignment';\nimport  AssignmentIndIcon  from 'material-ui-icons/AssignmentInd';\nimport  AssignmentLateIcon  from 'material-ui-icons/AssignmentLate';\nimport  AssignmentReturnIcon  from 'material-ui-icons/AssignmentReturn';\nimport  AssignmentReturnedIcon  from 'material-ui-icons/AssignmentReturned';\nimport  AssignmentTurnedInIcon  from 'material-ui-icons/AssignmentTurnedIn';\nimport  AssistantIcon  from 'material-ui-icons/Assistant';\nimport  AssistantPhotoIcon  from 'material-ui-icons/AssistantPhoto';\nimport  AttachFileIcon  from 'material-ui-icons/AttachFile';\nimport  AttachmentIcon  from 'material-ui-icons/Attachment';\nimport  AttachMoneyIcon  from 'material-ui-icons/AttachMoney';\nimport  AudiotrackIcon  from 'material-ui-icons/Audiotrack';\nimport  AutorenewIcon  from 'material-ui-icons/Autorenew';\nimport  AvTimerIcon  from 'material-ui-icons/AvTimer';\nimport  BackspaceIcon  from 'material-ui-icons/Backspace';\nimport  BackupIcon  from 'material-ui-icons/Backup';\nimport  Battery20Icon  from 'material-ui-icons/Battery20';\nimport  Battery30Icon  from 'material-ui-icons/Battery30';\nimport  Battery50Icon  from 'material-ui-icons/Battery50';\nimport  Battery60Icon  from 'material-ui-icons/Battery60';\nimport  Battery80Icon  from 'material-ui-icons/Battery80';\nimport  Battery90Icon  from 'material-ui-icons/Battery90';\nimport  BatteryAlertIcon  from 'material-ui-icons/BatteryAlert';\nimport  BatteryCharging20Icon  from 'material-ui-icons/BatteryCharging20';\nimport  BatteryCharging30Icon  from 'material-ui-icons/BatteryCharging30';\nimport  BatteryCharging50Icon  from 'material-ui-icons/BatteryCharging50';\nimport  BatteryCharging60Icon  from 'material-ui-icons/BatteryCharging60';\nimport  BatteryCharging80Icon  from 'material-ui-icons/BatteryCharging80';\nimport  BatteryCharging90Icon  from 'material-ui-icons/BatteryCharging90';\nimport  BatteryChargingFullIcon  from 'material-ui-icons/BatteryChargingFull';\nimport  BatteryFullIcon  from 'material-ui-icons/BatteryFull';\nimport  BatteryStdIcon  from 'material-ui-icons/BatteryStd';\nimport  BatteryUnknownIcon  from 'material-ui-icons/BatteryUnknown';\nimport  BeachAccessIcon  from 'material-ui-icons/BeachAccess';\nimport  BeenhereIcon  from 'material-ui-icons/Beenhere';\nimport  BlockIcon  from 'material-ui-icons/Block';\nimport  BluetoothIcon  from 'material-ui-icons/Bluetooth';\nimport  BluetoothAudioIcon  from 'material-ui-icons/BluetoothAudio';\nimport  BluetoothConnectedIcon  from 'material-ui-icons/BluetoothConnected';\nimport  BluetoothDisabledIcon  from 'material-ui-icons/BluetoothDisabled';\nimport  BluetoothSearchingIcon  from 'material-ui-icons/BluetoothSearching';\nimport  BlurCircularIcon  from 'material-ui-icons/BlurCircular';\nimport  BlurLinearIcon  from 'material-ui-icons/BlurLinear';\nimport  BlurOffIcon  from 'material-ui-icons/BlurOff';\nimport  BlurOnIcon  from 'material-ui-icons/BlurOn';\nimport  BookIcon  from 'material-ui-icons/Book';\nimport  BookmarkIcon  from 'material-ui-icons/Bookmark';\nimport  BookmarkBorderIcon  from 'material-ui-icons/BookmarkBorder';\nimport  BorderAllIcon  from 'material-ui-icons/BorderAll';\nimport  BorderBottomIcon  from 'material-ui-icons/BorderBottom';\nimport  BorderClearIcon  from 'material-ui-icons/BorderClear';\nimport  BorderColorIcon  from 'material-ui-icons/BorderColor';\nimport  BorderHorizontalIcon  from 'material-ui-icons/BorderHorizontal';\nimport  BorderInnerIcon  from 'material-ui-icons/BorderInner';\nimport  BorderLeftIcon  from 'material-ui-icons/BorderLeft';\nimport  BorderOuterIcon  from 'material-ui-icons/BorderOuter';\nimport  BorderRightIcon  from 'material-ui-icons/BorderRight';\nimport  BorderStyleIcon  from 'material-ui-icons/BorderStyle';\nimport  BorderTopIcon  from 'material-ui-icons/BorderTop';\nimport  BorderVerticalIcon  from 'material-ui-icons/BorderVertical';\nimport  BrandingWatermarkIcon  from 'material-ui-icons/BrandingWatermark';\nimport  Brightness1Icon  from 'material-ui-icons/Brightness1';\nimport  Brightness2Icon  from 'material-ui-icons/Brightness2';\nimport  Brightness3Icon  from 'material-ui-icons/Brightness3';\nimport  Brightness4Icon  from 'material-ui-icons/Brightness4';\nimport  Brightness5Icon  from 'material-ui-icons/Brightness5';\nimport  Brightness6Icon  from 'material-ui-icons/Brightness6';\nimport  Brightness7Icon  from 'material-ui-icons/Brightness7';\nimport  BrightnessAutoIcon  from 'material-ui-icons/BrightnessAuto';\nimport  BrightnessHighIcon  from 'material-ui-icons/BrightnessHigh';\nimport  BrightnessLowIcon  from 'material-ui-icons/BrightnessLow';\nimport  BrightnessMediumIcon  from 'material-ui-icons/BrightnessMedium';\nimport  BrokenImageIcon  from 'material-ui-icons/BrokenImage';\nimport  BrushIcon  from 'material-ui-icons/Brush';\nimport  BubbleChartIcon  from 'material-ui-icons/BubbleChart';\nimport  BugReportIcon  from 'material-ui-icons/BugReport';\nimport  BuildIcon  from 'material-ui-icons/Build';\nimport  BurstModeIcon  from 'material-ui-icons/BurstMode';\nimport  BusinessIcon  from 'material-ui-icons/Business';\nimport  BusinessCenterIcon  from 'material-ui-icons/BusinessCenter';\nimport  CachedIcon  from 'material-ui-icons/Cached';\nimport  CakeIcon  from 'material-ui-icons/Cake';\nimport  CallIcon  from 'material-ui-icons/Call';\nimport  CallEndIcon  from 'material-ui-icons/CallEnd';\nimport  CallMadeIcon  from 'material-ui-icons/CallMade';\nimport  CallMergeIcon  from 'material-ui-icons/CallMerge';\nimport  CallMissedIcon  from 'material-ui-icons/CallMissed';\nimport  CallMissedOutgoingIcon  from 'material-ui-icons/CallMissedOutgoing';\nimport  CallReceivedIcon  from 'material-ui-icons/CallReceived';\nimport  CallSplitIcon  from 'material-ui-icons/CallSplit';\nimport  CallToActionIcon  from 'material-ui-icons/CallToAction';\nimport  CameraIcon  from 'material-ui-icons/Camera';\nimport  CameraAltIcon  from 'material-ui-icons/CameraAlt';\nimport  CameraEnhanceIcon  from 'material-ui-icons/CameraEnhance';\nimport  CameraFrontIcon  from 'material-ui-icons/CameraFront';\nimport  CameraRearIcon  from 'material-ui-icons/CameraRear';\nimport  CameraRollIcon  from 'material-ui-icons/CameraRoll';\nimport  CancelIcon  from 'material-ui-icons/Cancel';\nimport  CardGiftcardIcon  from 'material-ui-icons/CardGiftcard';\nimport  CardMembershipIcon  from 'material-ui-icons/CardMembership';\nimport  CardTravelIcon  from 'material-ui-icons/CardTravel';\nimport  CasinoIcon  from 'material-ui-icons/Casino';\nimport  CastIcon  from 'material-ui-icons/Cast';\nimport  CastConnectedIcon  from 'material-ui-icons/CastConnected';\nimport  CenterFocusStrongIcon  from 'material-ui-icons/CenterFocusStrong';\nimport  CenterFocusWeakIcon  from 'material-ui-icons/CenterFocusWeak';\nimport  ChangeHistoryIcon  from 'material-ui-icons/ChangeHistory';\nimport  ChatIcon  from 'material-ui-icons/Chat';\nimport  ChatBubbleIcon  from 'material-ui-icons/ChatBubble';\nimport  ChatBubbleOutlineIcon  from 'material-ui-icons/ChatBubbleOutline';\nimport  CheckIcon  from 'material-ui-icons/Check';\nimport  CheckBoxIcon  from 'material-ui-icons/CheckBox';\nimport  CheckBoxOutlineBlankIcon  from 'material-ui-icons/CheckBoxOutlineBlank';\nimport  CheckCircleIcon  from 'material-ui-icons/CheckCircle';\nimport  ChevronLeftIcon  from 'material-ui-icons/ChevronLeft';\nimport  ChevronRightIcon  from 'material-ui-icons/ChevronRight';\nimport  ChildCareIcon  from 'material-ui-icons/ChildCare';\nimport  ChildFriendlyIcon  from 'material-ui-icons/ChildFriendly';\nimport  ChromeReaderModeIcon  from 'material-ui-icons/ChromeReaderMode';\nimport  ClassIcon  from 'material-ui-icons/Class';\nimport  ClearIcon  from 'material-ui-icons/Clear';\nimport  ClearAllIcon  from 'material-ui-icons/ClearAll';\nimport  CloseIcon  from 'material-ui-icons/Close';\nimport  ClosedCaptionIcon  from 'material-ui-icons/ClosedCaption';\nimport  CloudIcon  from 'material-ui-icons/Cloud';\nimport  CloudCircleIcon  from 'material-ui-icons/CloudCircle';\nimport  CloudDoneIcon  from 'material-ui-icons/CloudDone';\nimport  CloudDownloadIcon  from 'material-ui-icons/CloudDownload';\nimport  CloudOffIcon  from 'material-ui-icons/CloudOff';\nimport  CloudQueueIcon  from 'material-ui-icons/CloudQueue';\nimport  CloudUploadIcon  from 'material-ui-icons/CloudUpload';\nimport  CodeIcon  from 'material-ui-icons/Code';\nimport  CollectionsIcon  from 'material-ui-icons/Collections';\nimport  CollectionsBookmarkIcon  from 'material-ui-icons/CollectionsBookmark';\nimport  ColorizeIcon  from 'material-ui-icons/Colorize';\nimport  ColorLensIcon  from 'material-ui-icons/ColorLens';\nimport  CommentIcon  from 'material-ui-icons/Comment';\nimport  CompareIcon  from 'material-ui-icons/Compare';\nimport  CompareArrowsIcon  from 'material-ui-icons/CompareArrows';\nimport  ComputerIcon  from 'material-ui-icons/Computer';\nimport  ConfirmationNumberIcon  from 'material-ui-icons/ConfirmationNumber';\nimport  ContactMailIcon  from 'material-ui-icons/ContactMail';\nimport  ContactPhoneIcon  from 'material-ui-icons/ContactPhone';\nimport  ContactsIcon  from 'material-ui-icons/Contacts';\nimport  ContentCopyIcon  from 'material-ui-icons/ContentCopy';\nimport  ContentCutIcon  from 'material-ui-icons/ContentCut';\nimport  ContentPasteIcon  from 'material-ui-icons/ContentPaste';\nimport  ControlPointIcon  from 'material-ui-icons/ControlPoint';\nimport  ControlPointDuplicateIcon  from 'material-ui-icons/ControlPointDuplicate';\nimport  CopyrightIcon  from 'material-ui-icons/Copyright';\nimport  CreateIcon  from 'material-ui-icons/Create';\nimport  CreateNewFolderIcon  from 'material-ui-icons/CreateNewFolder';\nimport  CreditCardIcon  from 'material-ui-icons/CreditCard';\nimport  CropIcon  from 'material-ui-icons/Crop';\nimport  Crop169Icon  from 'material-ui-icons/Crop169';\nimport  Crop32Icon  from 'material-ui-icons/Crop32';\nimport  Crop54Icon  from 'material-ui-icons/Crop54';\nimport  Crop75Icon  from 'material-ui-icons/Crop75';\nimport  CropDinIcon  from 'material-ui-icons/CropDin';\nimport  CropFreeIcon  from 'material-ui-icons/CropFree';\nimport  CropLandscapeIcon  from 'material-ui-icons/CropLandscape';\nimport  CropOriginalIcon  from 'material-ui-icons/CropOriginal';\nimport  CropPortraitIcon  from 'material-ui-icons/CropPortrait';\nimport  CropRotateIcon  from 'material-ui-icons/CropRotate';\nimport  CropSquareIcon  from 'material-ui-icons/CropSquare';\nimport  DashboardIcon  from 'material-ui-icons/Dashboard';\nimport  DataUsageIcon  from 'material-ui-icons/DataUsage';\nimport  DateRangeIcon  from 'material-ui-icons/DateRange';\nimport  DehazeIcon  from 'material-ui-icons/Dehaze';\nimport  DeleteIcon  from 'material-ui-icons/Delete';\nimport  DeleteForeverIcon  from 'material-ui-icons/DeleteForever';\nimport  DeleteSweepIcon  from 'material-ui-icons/DeleteSweep';\nimport  DescriptionIcon  from 'material-ui-icons/Description';\nimport  DesktopMacIcon  from 'material-ui-icons/DesktopMac';\nimport  DesktopWindowsIcon  from 'material-ui-icons/DesktopWindows';\nimport  DetailsIcon  from 'material-ui-icons/Details';\nimport  DeveloperBoardIcon  from 'material-ui-icons/DeveloperBoard';\nimport  DeveloperModeIcon  from 'material-ui-icons/DeveloperMode';\nimport  DeviceHubIcon  from 'material-ui-icons/DeviceHub';\nimport  DevicesIcon  from 'material-ui-icons/Devices';\nimport  DevicesOtherIcon  from 'material-ui-icons/DevicesOther';\nimport  DialerSipIcon  from 'material-ui-icons/DialerSip';\nimport  DialpadIcon  from 'material-ui-icons/Dialpad';\nimport  DirectionsIcon  from 'material-ui-icons/Directions';\nimport  DirectionsBikeIcon  from 'material-ui-icons/DirectionsBike';\nimport  DirectionsBoatIcon  from 'material-ui-icons/DirectionsBoat';\nimport  DirectionsBusIcon  from 'material-ui-icons/DirectionsBus';\nimport  DirectionsCarIcon  from 'material-ui-icons/DirectionsCar';\nimport  DirectionsRailwayIcon  from 'material-ui-icons/DirectionsRailway';\nimport  DirectionsRunIcon  from 'material-ui-icons/DirectionsRun';\nimport  DirectionsSubwayIcon  from 'material-ui-icons/DirectionsSubway';\nimport  DirectionsTransitIcon  from 'material-ui-icons/DirectionsTransit';\nimport  DirectionsWalkIcon  from 'material-ui-icons/DirectionsWalk';\nimport  DiscFullIcon  from 'material-ui-icons/DiscFull';\nimport  DnsIcon  from 'material-ui-icons/Dns';\nimport  DockIcon  from 'material-ui-icons/Dock';\nimport  DomainIcon  from 'material-ui-icons/Domain';\nimport  DoneIcon  from 'material-ui-icons/Done';\nimport  DoneAllIcon  from 'material-ui-icons/DoneAll';\nimport  DoNotDisturbIcon  from 'material-ui-icons/DoNotDisturb';\nimport  DoNotDisturbAltIcon  from 'material-ui-icons/DoNotDisturbAlt';\nimport  DoNotDisturbOffIcon  from 'material-ui-icons/DoNotDisturbOff';\nimport  DoNotDisturbOnIcon  from 'material-ui-icons/DoNotDisturbOn';\nimport  DonutLargeIcon  from 'material-ui-icons/DonutLarge';\nimport  DonutSmallIcon  from 'material-ui-icons/DonutSmall';\nimport  DraftsIcon  from 'material-ui-icons/Drafts';\nimport  DragHandleIcon  from 'material-ui-icons/DragHandle';\nimport  DriveEtaIcon  from 'material-ui-icons/DriveEta';\nimport  DvrIcon  from 'material-ui-icons/Dvr';\nimport  EditIcon  from 'material-ui-icons/Edit';\nimport  EditLocationIcon  from 'material-ui-icons/EditLocation';\nimport  EjectIcon  from 'material-ui-icons/Eject';\nimport  EmailIcon  from 'material-ui-icons/Email';\nimport  EnhancedEncryptionIcon  from 'material-ui-icons/EnhancedEncryption';\nimport  EqualizerIcon  from 'material-ui-icons/Equalizer';\nimport  ErrorIcon  from 'material-ui-icons/Error';\nimport  ErrorOutlineIcon  from 'material-ui-icons/ErrorOutline';\nimport  EuroSymbolIcon  from 'material-ui-icons/EuroSymbol';\nimport  EventIcon  from 'material-ui-icons/Event';\nimport  EventAvailableIcon  from 'material-ui-icons/EventAvailable';\nimport  EventBusyIcon  from 'material-ui-icons/EventBusy';\nimport  EventNoteIcon  from 'material-ui-icons/EventNote';\nimport  EventSeatIcon  from 'material-ui-icons/EventSeat';\nimport  EvStationIcon  from 'material-ui-icons/EvStation';\nimport  ExitToAppIcon  from 'material-ui-icons/ExitToApp';\nimport  ExpandLessIcon  from 'material-ui-icons/ExpandLess';\nimport  ExpandMoreIcon  from 'material-ui-icons/ExpandMore';\nimport  ExplicitIcon  from 'material-ui-icons/Explicit';\nimport  ExploreIcon  from 'material-ui-icons/Explore';\nimport  ExposureIcon  from 'material-ui-icons/Exposure';\nimport  ExposureNeg1Icon  from 'material-ui-icons/ExposureNeg1';\nimport  ExposureNeg2Icon  from 'material-ui-icons/ExposureNeg2';\nimport  ExposurePlus1Icon  from 'material-ui-icons/ExposurePlus1';\nimport  ExposurePlus2Icon  from 'material-ui-icons/ExposurePlus2';\nimport  ExposureZeroIcon  from 'material-ui-icons/ExposureZero';\nimport  ExtensionIcon  from 'material-ui-icons/Extension';\nimport  FaceIcon  from 'material-ui-icons/Face';\nimport  FastForwardIcon  from 'material-ui-icons/FastForward';\nimport  FastRewindIcon  from 'material-ui-icons/FastRewind';\nimport  FavoriteIcon  from 'material-ui-icons/Favorite';\nimport  FavoriteBorderIcon  from 'material-ui-icons/FavoriteBorder';\nimport  FeaturedPlayListIcon  from 'material-ui-icons/FeaturedPlayList';\nimport  FeaturedVideoIcon  from 'material-ui-icons/FeaturedVideo';\nimport  FeedbackIcon  from 'material-ui-icons/Feedback';\nimport  FiberDvrIcon  from 'material-ui-icons/FiberDvr';\nimport  FiberManualRecordIcon  from 'material-ui-icons/FiberManualRecord';\nimport  FiberNewIcon  from 'material-ui-icons/FiberNew';\nimport  FiberPinIcon  from 'material-ui-icons/FiberPin';\nimport  FiberSmartRecordIcon  from 'material-ui-icons/FiberSmartRecord';\nimport  FileDownloadIcon  from 'material-ui-icons/FileDownload';\nimport  FileUploadIcon  from 'material-ui-icons/FileUpload';\nimport  FilterIcon  from 'material-ui-icons/Filter';\nimport  Filter1Icon  from 'material-ui-icons/Filter1';\nimport  Filter2Icon  from 'material-ui-icons/Filter2';\nimport  Filter3Icon  from 'material-ui-icons/Filter3';\nimport  Filter4Icon  from 'material-ui-icons/Filter4';\nimport  Filter5Icon  from 'material-ui-icons/Filter5';\nimport  Filter6Icon  from 'material-ui-icons/Filter6';\nimport  Filter7Icon  from 'material-ui-icons/Filter7';\nimport  Filter8Icon  from 'material-ui-icons/Filter8';\nimport  Filter9Icon  from 'material-ui-icons/Filter9';\nimport  Filter9PlusIcon  from 'material-ui-icons/Filter9Plus';\nimport  FilterBAndWIcon  from 'material-ui-icons/FilterBAndW';\nimport  FilterCenterFocusIcon  from 'material-ui-icons/FilterCenterFocus';\nimport  FilterDramaIcon  from 'material-ui-icons/FilterDrama';\nimport  FilterFramesIcon  from 'material-ui-icons/FilterFrames';\nimport  FilterHdrIcon  from 'material-ui-icons/FilterHdr';\nimport  FilterListIcon  from 'material-ui-icons/FilterList';\nimport  FilterNoneIcon  from 'material-ui-icons/FilterNone';\nimport  FilterTiltShiftIcon  from 'material-ui-icons/FilterTiltShift';\nimport  FilterVintageIcon  from 'material-ui-icons/FilterVintage';\nimport  FindInPageIcon  from 'material-ui-icons/FindInPage';\nimport  FindReplaceIcon  from 'material-ui-icons/FindReplace';\nimport  FingerprintIcon  from 'material-ui-icons/Fingerprint';\nimport  FirstPageIcon  from 'material-ui-icons/FirstPage';\nimport  FitnessCenterIcon  from 'material-ui-icons/FitnessCenter';\nimport  FlagIcon  from 'material-ui-icons/Flag';\nimport  FlareIcon  from 'material-ui-icons/Flare';\nimport  FlashAutoIcon  from 'material-ui-icons/FlashAuto';\nimport  FlashOffIcon  from 'material-ui-icons/FlashOff';\nimport  FlashOnIcon  from 'material-ui-icons/FlashOn';\nimport  FlightIcon  from 'material-ui-icons/Flight';\nimport  FlightLandIcon  from 'material-ui-icons/FlightLand';\nimport  FlightTakeoffIcon  from 'material-ui-icons/FlightTakeoff';\nimport  FlipIcon  from 'material-ui-icons/Flip';\nimport  FlipToBackIcon  from 'material-ui-icons/FlipToBack';\nimport  FlipToFrontIcon  from 'material-ui-icons/FlipToFront';\nimport  FolderIcon  from 'material-ui-icons/Folder';\nimport  FolderOpenIcon  from 'material-ui-icons/FolderOpen';\nimport  FolderSharedIcon  from 'material-ui-icons/FolderShared';\nimport  FolderSpecialIcon  from 'material-ui-icons/FolderSpecial';\nimport  FontDownloadIcon  from 'material-ui-icons/FontDownload';\nimport  FormatAlignCenterIcon  from 'material-ui-icons/FormatAlignCenter';\nimport  FormatAlignJustifyIcon  from 'material-ui-icons/FormatAlignJustify';\nimport  FormatAlignLeftIcon  from 'material-ui-icons/FormatAlignLeft';\nimport  FormatAlignRightIcon  from 'material-ui-icons/FormatAlignRight';\nimport  FormatBoldIcon  from 'material-ui-icons/FormatBold';\nimport  FormatClearIcon  from 'material-ui-icons/FormatClear';\nimport  FormatColorFillIcon  from 'material-ui-icons/FormatColorFill';\nimport  FormatColorResetIcon  from 'material-ui-icons/FormatColorReset';\nimport  FormatColorTextIcon  from 'material-ui-icons/FormatColorText';\nimport  FormatIndentDecreaseIcon  from 'material-ui-icons/FormatIndentDecrease';\nimport  FormatIndentIncreaseIcon  from 'material-ui-icons/FormatIndentIncrease';\nimport  FormatItalicIcon  from 'material-ui-icons/FormatItalic';\nimport  FormatLineSpacingIcon  from 'material-ui-icons/FormatLineSpacing';\nimport  FormatListBulletedIcon  from 'material-ui-icons/FormatListBulleted';\nimport  FormatListNumberedIcon  from 'material-ui-icons/FormatListNumbered';\nimport  FormatPaintIcon  from 'material-ui-icons/FormatPaint';\nimport  FormatQuoteIcon  from 'material-ui-icons/FormatQuote';\nimport  FormatShapesIcon  from 'material-ui-icons/FormatShapes';\nimport  FormatSizeIcon  from 'material-ui-icons/FormatSize';\nimport  FormatStrikethroughIcon  from 'material-ui-icons/FormatStrikethrough';\nimport  FormatTextdirectionLToRIcon  from 'material-ui-icons/FormatTextdirectionLToR';\nimport  FormatTextdirectionRToLIcon  from 'material-ui-icons/FormatTextdirectionRToL';\nimport  FormatUnderlinedIcon  from 'material-ui-icons/FormatUnderlined';\nimport  ForumIcon  from 'material-ui-icons/Forum';\nimport  ForwardIcon  from 'material-ui-icons/Forward';\nimport  Forward10Icon  from 'material-ui-icons/Forward10';\nimport  Forward30Icon  from 'material-ui-icons/Forward30';\nimport  Forward5Icon  from 'material-ui-icons/Forward5';\nimport  FreeBreakfastIcon  from 'material-ui-icons/FreeBreakfast';\nimport  FullscreenIcon  from 'material-ui-icons/Fullscreen';\nimport  FullscreenExitIcon  from 'material-ui-icons/FullscreenExit';\nimport  FunctionsIcon  from 'material-ui-icons/Functions';\nimport  GamepadIcon  from 'material-ui-icons/Gamepad';\nimport  GamesIcon  from 'material-ui-icons/Games';\nimport  GavelIcon  from 'material-ui-icons/Gavel';\nimport  GestureIcon  from 'material-ui-icons/Gesture';\nimport  GetAppIcon  from 'material-ui-icons/GetApp';\nimport  GifIcon  from 'material-ui-icons/Gif';\nimport  GolfCourseIcon  from 'material-ui-icons/GolfCourse';\nimport  GpsFixedIcon  from 'material-ui-icons/GpsFixed';\nimport  GpsNotFixedIcon  from 'material-ui-icons/GpsNotFixed';\nimport  GpsOffIcon  from 'material-ui-icons/GpsOff';\nimport  GradeIcon  from 'material-ui-icons/Grade';\nimport  GradientIcon  from 'material-ui-icons/Gradient';\nimport  GrainIcon  from 'material-ui-icons/Grain';\nimport  GraphicEqIcon  from 'material-ui-icons/GraphicEq';\nimport  GridOffIcon  from 'material-ui-icons/GridOff';\nimport  GridOnIcon  from 'material-ui-icons/GridOn';\nimport  GroupIcon  from 'material-ui-icons/Group';\nimport  GroupAddIcon  from 'material-ui-icons/GroupAdd';\nimport  GroupWorkIcon  from 'material-ui-icons/GroupWork';\nimport  GTranslateIcon  from 'material-ui-icons/GTranslate';\nimport  HdIcon  from 'material-ui-icons/Hd';\nimport  HdrOffIcon  from 'material-ui-icons/HdrOff';\nimport  HdrOnIcon  from 'material-ui-icons/HdrOn';\nimport  HdrStrongIcon  from 'material-ui-icons/HdrStrong';\nimport  HdrWeakIcon  from 'material-ui-icons/HdrWeak';\nimport  HeadsetIcon  from 'material-ui-icons/Headset';\nimport  HeadsetMicIcon  from 'material-ui-icons/HeadsetMic';\nimport  HealingIcon  from 'material-ui-icons/Healing';\nimport  HearingIcon  from 'material-ui-icons/Hearing';\nimport  HelpIcon  from 'material-ui-icons/Help';\nimport  HelpOutlineIcon  from 'material-ui-icons/HelpOutline';\nimport  HighlightIcon  from 'material-ui-icons/Highlight';\nimport  HighlightOffIcon  from 'material-ui-icons/HighlightOff';\nimport  HighQualityIcon  from 'material-ui-icons/HighQuality';\nimport  HistoryIcon  from 'material-ui-icons/History';\nimport  HomeIcon  from 'material-ui-icons/Home';\nimport  HotelIcon  from 'material-ui-icons/Hotel';\nimport  HotTubIcon  from 'material-ui-icons/HotTub';\nimport  HourglassEmptyIcon  from 'material-ui-icons/HourglassEmpty';\nimport  HourglassFullIcon  from 'material-ui-icons/HourglassFull';\nimport  HttpIcon  from 'material-ui-icons/Http';\nimport  HttpsIcon  from 'material-ui-icons/Https';\nimport  ImageIcon  from 'material-ui-icons/Image';\nimport  ImageAspectRatioIcon  from 'material-ui-icons/ImageAspectRatio';\nimport  ImportantDevicesIcon  from 'material-ui-icons/ImportantDevices';\nimport  ImportContactsIcon  from 'material-ui-icons/ImportContacts';\nimport  ImportExportIcon  from 'material-ui-icons/ImportExport';\nimport  InboxIcon  from 'material-ui-icons/Inbox';\nimport  IndeterminateCheckBoxIcon  from 'material-ui-icons/IndeterminateCheckBox';\nimport  InfoIcon  from 'material-ui-icons/Info';\nimport  InfoOutlineIcon  from 'material-ui-icons/InfoOutline';\nimport  InputIcon  from 'material-ui-icons/Input';\nimport  InsertChartIcon  from 'material-ui-icons/InsertChart';\nimport  InsertCommentIcon  from 'material-ui-icons/InsertComment';\nimport  InsertDriveFileIcon  from 'material-ui-icons/InsertDriveFile';\nimport  InsertEmoticonIcon  from 'material-ui-icons/InsertEmoticon';\nimport  InsertInvitationIcon  from 'material-ui-icons/InsertInvitation';\nimport  InsertLinkIcon  from 'material-ui-icons/InsertLink';\nimport  InsertPhotoIcon  from 'material-ui-icons/InsertPhoto';\nimport  InvertColorsIcon  from 'material-ui-icons/InvertColors';\nimport  InvertColorsOffIcon  from 'material-ui-icons/InvertColorsOff';\nimport  IsoIcon  from 'material-ui-icons/Iso';\nimport  KeyboardIcon  from 'material-ui-icons/Keyboard';\nimport  KeyboardArrowDownIcon  from 'material-ui-icons/KeyboardArrowDown';\nimport  KeyboardArrowLeftIcon  from 'material-ui-icons/KeyboardArrowLeft';\nimport  KeyboardArrowRightIcon  from 'material-ui-icons/KeyboardArrowRight';\nimport  KeyboardArrowUpIcon  from 'material-ui-icons/KeyboardArrowUp';\nimport  KeyboardBackspaceIcon  from 'material-ui-icons/KeyboardBackspace';\nimport  KeyboardCapslockIcon  from 'material-ui-icons/KeyboardCapslock';\nimport  KeyboardHideIcon  from 'material-ui-icons/KeyboardHide';\nimport  KeyboardReturnIcon  from 'material-ui-icons/KeyboardReturn';\nimport  KeyboardTabIcon  from 'material-ui-icons/KeyboardTab';\nimport  KeyboardVoiceIcon  from 'material-ui-icons/KeyboardVoice';\nimport  KitchenIcon  from 'material-ui-icons/Kitchen';\nimport  LabelIcon  from 'material-ui-icons/Label';\nimport  LabelOutlineIcon  from 'material-ui-icons/LabelOutline';\nimport  LandscapeIcon  from 'material-ui-icons/Landscape';\nimport  LanguageIcon  from 'material-ui-icons/Language';\nimport  LaptopIcon  from 'material-ui-icons/Laptop';\nimport  LaptopChromebookIcon  from 'material-ui-icons/LaptopChromebook';\nimport  LaptopMacIcon  from 'material-ui-icons/LaptopMac';\nimport  LaptopWindowsIcon  from 'material-ui-icons/LaptopWindows';\nimport  LastPageIcon  from 'material-ui-icons/LastPage';\nimport  LaunchIcon  from 'material-ui-icons/Launch';\nimport  LayersIcon  from 'material-ui-icons/Layers';\nimport  LayersClearIcon  from 'material-ui-icons/LayersClear';\nimport  LeakAddIcon  from 'material-ui-icons/LeakAdd';\nimport  LeakRemoveIcon  from 'material-ui-icons/LeakRemove';\nimport  LensIcon  from 'material-ui-icons/Lens';\nimport  LibraryAddIcon  from 'material-ui-icons/LibraryAdd';\nimport  LibraryBooksIcon  from 'material-ui-icons/LibraryBooks';\nimport  LibraryMusicIcon  from 'material-ui-icons/LibraryMusic';\nimport  LightbulbOutlineIcon  from 'material-ui-icons/LightbulbOutline';\nimport  LinearScaleIcon  from 'material-ui-icons/LinearScale';\nimport  LineStyleIcon  from 'material-ui-icons/LineStyle';\nimport  LineWeightIcon  from 'material-ui-icons/LineWeight';\nimport  LinkIcon  from 'material-ui-icons/Link';\nimport  LinkedCameraIcon  from 'material-ui-icons/LinkedCamera';\nimport  ListIcon  from 'material-ui-icons/List';\nimport  LiveHelpIcon  from 'material-ui-icons/LiveHelp';\nimport  LiveTvIcon  from 'material-ui-icons/LiveTv';\nimport  LocalActivityIcon  from 'material-ui-icons/LocalActivity';\nimport  LocalAirportIcon  from 'material-ui-icons/LocalAirport';\nimport  LocalAtmIcon  from 'material-ui-icons/LocalAtm';\nimport  LocalBarIcon  from 'material-ui-icons/LocalBar';\nimport  LocalCafeIcon  from 'material-ui-icons/LocalCafe';\nimport  LocalCarWashIcon  from 'material-ui-icons/LocalCarWash';\nimport  LocalConvenienceStoreIcon  from 'material-ui-icons/LocalConvenienceStore';\nimport  LocalDiningIcon  from 'material-ui-icons/LocalDining';\nimport  LocalDrinkIcon  from 'material-ui-icons/LocalDrink';\nimport  LocalFloristIcon  from 'material-ui-icons/LocalFlorist';\nimport  LocalGasStationIcon  from 'material-ui-icons/LocalGasStation';\nimport  LocalGroceryStoreIcon  from 'material-ui-icons/LocalGroceryStore';\nimport  LocalHospitalIcon  from 'material-ui-icons/LocalHospital';\nimport  LocalHotelIcon  from 'material-ui-icons/LocalHotel';\nimport  LocalLaundryServiceIcon  from 'material-ui-icons/LocalLaundryService';\nimport  LocalLibraryIcon  from 'material-ui-icons/LocalLibrary';\nimport  LocalMallIcon  from 'material-ui-icons/LocalMall';\nimport  LocalMoviesIcon  from 'material-ui-icons/LocalMovies';\nimport  LocalOfferIcon  from 'material-ui-icons/LocalOffer';\nimport  LocalParkingIcon  from 'material-ui-icons/LocalParking';\nimport  LocalPharmacyIcon  from 'material-ui-icons/LocalPharmacy';\nimport  LocalPhoneIcon  from 'material-ui-icons/LocalPhone';\nimport  LocalPizzaIcon  from 'material-ui-icons/LocalPizza';\nimport  LocalPlayIcon  from 'material-ui-icons/LocalPlay';\nimport  LocalPostOfficeIcon  from 'material-ui-icons/LocalPostOffice';\nimport  LocalPrintshopIcon  from 'material-ui-icons/LocalPrintshop';\nimport  LocalSeeIcon  from 'material-ui-icons/LocalSee';\nimport  LocalShippingIcon  from 'material-ui-icons/LocalShipping';\nimport  LocalTaxiIcon  from 'material-ui-icons/LocalTaxi';\nimport  LocationCityIcon  from 'material-ui-icons/LocationCity';\nimport  LocationDisabledIcon  from 'material-ui-icons/LocationDisabled';\nimport  LocationOffIcon  from 'material-ui-icons/LocationOff';\nimport  LocationOnIcon  from 'material-ui-icons/LocationOn';\nimport  LocationSearchingIcon  from 'material-ui-icons/LocationSearching';\nimport  LockIcon  from 'material-ui-icons/Lock';\nimport  LockOpenIcon  from 'material-ui-icons/LockOpen';\nimport  LockOutlineIcon  from 'material-ui-icons/LockOutline';\nimport  LooksIcon  from 'material-ui-icons/Looks';\nimport  Looks3Icon  from 'material-ui-icons/Looks3';\nimport  Looks4Icon  from 'material-ui-icons/Looks4';\nimport  Looks5Icon  from 'material-ui-icons/Looks5';\nimport  Looks6Icon  from 'material-ui-icons/Looks6';\nimport  LooksOneIcon  from 'material-ui-icons/LooksOne';\nimport  LooksTwoIcon  from 'material-ui-icons/LooksTwo';\nimport  LoopIcon  from 'material-ui-icons/Loop';\nimport  LoupeIcon  from 'material-ui-icons/Loupe';\nimport  LowPriorityIcon  from 'material-ui-icons/LowPriority';\nimport  LoyaltyIcon  from 'material-ui-icons/Loyalty';\nimport  MailIcon  from 'material-ui-icons/Mail';\nimport  MailOutlineIcon  from 'material-ui-icons/MailOutline';\nimport  MapIcon  from 'material-ui-icons/Map';\nimport  MarkunreadIcon  from 'material-ui-icons/Markunread';\nimport  MarkunreadMailboxIcon  from 'material-ui-icons/MarkunreadMailbox';\nimport  MemoryIcon  from 'material-ui-icons/Memory';\nimport  MenuIcon  from 'material-ui-icons/Menu';\nimport  MergeTypeIcon  from 'material-ui-icons/MergeType';\nimport  MessageIcon  from 'material-ui-icons/Message';\nimport  MicIcon  from 'material-ui-icons/Mic';\nimport  MicNoneIcon  from 'material-ui-icons/MicNone';\nimport  MicOffIcon  from 'material-ui-icons/MicOff';\nimport  MmsIcon  from 'material-ui-icons/Mms';\nimport  ModeCommentIcon  from 'material-ui-icons/ModeComment';\nimport  ModeEditIcon  from 'material-ui-icons/ModeEdit';\nimport  MonetizationOnIcon  from 'material-ui-icons/MonetizationOn';\nimport  MoneyOffIcon  from 'material-ui-icons/MoneyOff';\nimport  MonochromePhotosIcon  from 'material-ui-icons/MonochromePhotos';\nimport  MoodIcon  from 'material-ui-icons/Mood';\nimport  MoodBadIcon  from 'material-ui-icons/MoodBad';\nimport  MoreIcon  from 'material-ui-icons/More';\nimport  MoreHorizIcon  from 'material-ui-icons/MoreHoriz';\nimport  MoreVertIcon  from 'material-ui-icons/MoreVert';\nimport  MotorcycleIcon  from 'material-ui-icons/Motorcycle';\nimport  MouseIcon  from 'material-ui-icons/Mouse';\nimport  MoveToInboxIcon  from 'material-ui-icons/MoveToInbox';\nimport  MovieIcon  from 'material-ui-icons/Movie';\nimport  MovieCreationIcon  from 'material-ui-icons/MovieCreation';\nimport  MovieFilterIcon  from 'material-ui-icons/MovieFilter';\nimport  MultilineChartIcon  from 'material-ui-icons/MultilineChart';\nimport  MusicNoteIcon  from 'material-ui-icons/MusicNote';\nimport  MusicVideoIcon  from 'material-ui-icons/MusicVideo';\nimport  MyLocationIcon  from 'material-ui-icons/MyLocation';\nimport  NatureIcon  from 'material-ui-icons/Nature';\nimport  NaturePeopleIcon  from 'material-ui-icons/NaturePeople';\nimport  NavigateBeforeIcon  from 'material-ui-icons/NavigateBefore';\nimport  NavigateNextIcon  from 'material-ui-icons/NavigateNext';\nimport  NavigationIcon  from 'material-ui-icons/Navigation';\nimport  NearMeIcon  from 'material-ui-icons/NearMe';\nimport  NetworkCellIcon  from 'material-ui-icons/NetworkCell';\nimport  NetworkCheckIcon  from 'material-ui-icons/NetworkCheck';\nimport  NetworkLockedIcon  from 'material-ui-icons/NetworkLocked';\nimport  NetworkWifiIcon  from 'material-ui-icons/NetworkWifi';\nimport  NewReleasesIcon  from 'material-ui-icons/NewReleases';\nimport  NextWeekIcon  from 'material-ui-icons/NextWeek';\nimport  NfcIcon  from 'material-ui-icons/Nfc';\nimport  NoEncryptionIcon  from 'material-ui-icons/NoEncryption';\nimport  NoSimIcon  from 'material-ui-icons/NoSim';\nimport  NoteIcon  from 'material-ui-icons/Note';\nimport  NoteAddIcon  from 'material-ui-icons/NoteAdd';\nimport  NotificationsIcon  from 'material-ui-icons/Notifications';\nimport  NotificationsActiveIcon  from 'material-ui-icons/NotificationsActive';\nimport  NotificationsNoneIcon  from 'material-ui-icons/NotificationsNone';\nimport  NotificationsOffIcon  from 'material-ui-icons/NotificationsOff';\nimport  NotificationsPausedIcon  from 'material-ui-icons/NotificationsPaused';\nimport  NotInterestedIcon  from 'material-ui-icons/NotInterested';\nimport  OfflinePinIcon  from 'material-ui-icons/OfflinePin';\nimport  OndemandVideoIcon  from 'material-ui-icons/OndemandVideo';\nimport  OpacityIcon  from 'material-ui-icons/Opacity';\nimport  OpenInBrowserIcon  from 'material-ui-icons/OpenInBrowser';\nimport  OpenInNewIcon  from 'material-ui-icons/OpenInNew';\nimport  OpenWithIcon  from 'material-ui-icons/OpenWith';\nimport  PagesIcon  from 'material-ui-icons/Pages';\nimport  PageviewIcon  from 'material-ui-icons/Pageview';\nimport  PaletteIcon  from 'material-ui-icons/Palette';\nimport  PanoramaIcon  from 'material-ui-icons/Panorama';\nimport  PanoramaFishEyeIcon  from 'material-ui-icons/PanoramaFishEye';\nimport  PanoramaHorizontalIcon  from 'material-ui-icons/PanoramaHorizontal';\nimport  PanoramaVerticalIcon  from 'material-ui-icons/PanoramaVertical';\nimport  PanoramaWideAngleIcon  from 'material-ui-icons/PanoramaWideAngle';\nimport  PanToolIcon  from 'material-ui-icons/PanTool';\nimport  PartyModeIcon  from 'material-ui-icons/PartyMode';\nimport  PauseIcon  from 'material-ui-icons/Pause';\nimport  PauseCircleFilledIcon  from 'material-ui-icons/PauseCircleFilled';\nimport  PauseCircleOutlineIcon  from 'material-ui-icons/PauseCircleOutline';\nimport  PaymentIcon  from 'material-ui-icons/Payment';\nimport  PeopleIcon  from 'material-ui-icons/People';\nimport  PeopleOutlineIcon  from 'material-ui-icons/PeopleOutline';\nimport  PermCameraMicIcon  from 'material-ui-icons/PermCameraMic';\nimport  PermContactCalendarIcon  from 'material-ui-icons/PermContactCalendar';\nimport  PermDataSettingIcon  from 'material-ui-icons/PermDataSetting';\nimport  PermDeviceInformationIcon  from 'material-ui-icons/PermDeviceInformation';\nimport  PermIdentityIcon  from 'material-ui-icons/PermIdentity';\nimport  PermMediaIcon  from 'material-ui-icons/PermMedia';\nimport  PermPhoneMsgIcon  from 'material-ui-icons/PermPhoneMsg';\nimport  PermScanWifiIcon  from 'material-ui-icons/PermScanWifi';\nimport  PersonIcon  from 'material-ui-icons/Person';\nimport  PersonAddIcon  from 'material-ui-icons/PersonAdd';\nimport  PersonalVideoIcon  from 'material-ui-icons/PersonalVideo';\nimport  PersonOutlineIcon  from 'material-ui-icons/PersonOutline';\nimport  PersonPinIcon  from 'material-ui-icons/PersonPin';\nimport  PersonPinCircleIcon  from 'material-ui-icons/PersonPinCircle';\nimport  PetsIcon  from 'material-ui-icons/Pets';\nimport  PhoneIcon  from 'material-ui-icons/Phone';\nimport  PhoneAndroidIcon  from 'material-ui-icons/PhoneAndroid';\nimport  PhoneBluetoothSpeakerIcon  from 'material-ui-icons/PhoneBluetoothSpeaker';\nimport  PhoneForwardedIcon  from 'material-ui-icons/PhoneForwarded';\nimport  PhoneInTalkIcon  from 'material-ui-icons/PhoneInTalk';\nimport  PhoneIphoneIcon  from 'material-ui-icons/PhoneIphone';\nimport  PhonelinkIcon  from 'material-ui-icons/Phonelink';\nimport  PhonelinkEraseIcon  from 'material-ui-icons/PhonelinkErase';\nimport  PhonelinkLockIcon  from 'material-ui-icons/PhonelinkLock';\nimport  PhonelinkOffIcon  from 'material-ui-icons/PhonelinkOff';\nimport  PhonelinkRingIcon  from 'material-ui-icons/PhonelinkRing';\nimport  PhonelinkSetupIcon  from 'material-ui-icons/PhonelinkSetup';\nimport  PhoneLockedIcon  from 'material-ui-icons/PhoneLocked';\nimport  PhoneMissedIcon  from 'material-ui-icons/PhoneMissed';\nimport  PhonePausedIcon  from 'material-ui-icons/PhonePaused';\nimport  PhotoIcon  from 'material-ui-icons/Photo';\nimport  PhotoAlbumIcon  from 'material-ui-icons/PhotoAlbum';\nimport  PhotoCameraIcon  from 'material-ui-icons/PhotoCamera';\nimport  PhotoFilterIcon  from 'material-ui-icons/PhotoFilter';\nimport  PhotoLibraryIcon  from 'material-ui-icons/PhotoLibrary';\nimport  PhotoSizeSelectActualIcon  from 'material-ui-icons/PhotoSizeSelectActual';\nimport  PhotoSizeSelectLargeIcon  from 'material-ui-icons/PhotoSizeSelectLarge';\nimport  PhotoSizeSelectSmallIcon  from 'material-ui-icons/PhotoSizeSelectSmall';\nimport  PictureAsPdfIcon  from 'material-ui-icons/PictureAsPdf';\nimport  PictureInPictureIcon  from 'material-ui-icons/PictureInPicture';\nimport  PictureInPictureAltIcon  from 'material-ui-icons/PictureInPictureAlt';\nimport  PieChartIcon  from 'material-ui-icons/PieChart';\nimport  PieChartOutlinedIcon  from 'material-ui-icons/PieChartOutlined';\nimport  PinDropIcon  from 'material-ui-icons/PinDrop';\nimport  PlaceIcon  from 'material-ui-icons/Place';\nimport  PlayArrowIcon  from 'material-ui-icons/PlayArrow';\nimport  PlayCircleFilledIcon  from 'material-ui-icons/PlayCircleFilled';\nimport  PlayCircleOutlineIcon  from 'material-ui-icons/PlayCircleOutline';\nimport  PlayForWorkIcon  from 'material-ui-icons/PlayForWork';\nimport  PlaylistAddIcon  from 'material-ui-icons/PlaylistAdd';\nimport  PlaylistAddCheckIcon  from 'material-ui-icons/PlaylistAddCheck';\nimport  PlaylistPlayIcon  from 'material-ui-icons/PlaylistPlay';\nimport  PlusOneIcon  from 'material-ui-icons/PlusOne';\nimport  PollIcon  from 'material-ui-icons/Poll';\nimport  PolymerIcon  from 'material-ui-icons/Polymer';\nimport  PoolIcon  from 'material-ui-icons/Pool';\nimport  PortableWifiOffIcon  from 'material-ui-icons/PortableWifiOff';\nimport  PortraitIcon  from 'material-ui-icons/Portrait';\nimport  PowerIcon  from 'material-ui-icons/Power';\nimport  PowerInputIcon  from 'material-ui-icons/PowerInput';\nimport  PowerSettingsNewIcon  from 'material-ui-icons/PowerSettingsNew';\nimport  PregnantWomanIcon  from 'material-ui-icons/PregnantWoman';\nimport  PresentToAllIcon  from 'material-ui-icons/PresentToAll';\nimport  PrintIcon  from 'material-ui-icons/Print';\nimport  PriorityHighIcon  from 'material-ui-icons/PriorityHigh';\nimport  PublicIcon  from 'material-ui-icons/Public';\nimport  PublishIcon  from 'material-ui-icons/Publish';\nimport  QueryBuilderIcon  from 'material-ui-icons/QueryBuilder';\nimport  QuestionAnswerIcon  from 'material-ui-icons/QuestionAnswer';\nimport  QueueIcon  from 'material-ui-icons/Queue';\nimport  QueueMusicIcon  from 'material-ui-icons/QueueMusic';\nimport  QueuePlayNextIcon  from 'material-ui-icons/QueuePlayNext';\nimport  RadioIcon  from 'material-ui-icons/Radio';\nimport  RadioButtonCheckedIcon  from 'material-ui-icons/RadioButtonChecked';\nimport  RadioButtonUncheckedIcon  from 'material-ui-icons/RadioButtonUnchecked';\nimport  RateReviewIcon  from 'material-ui-icons/RateReview';\nimport  ReceiptIcon  from 'material-ui-icons/Receipt';\nimport  RecentActorsIcon  from 'material-ui-icons/RecentActors';\nimport  RecordVoiceOverIcon  from 'material-ui-icons/RecordVoiceOver';\nimport  RedeemIcon  from 'material-ui-icons/Redeem';\nimport  RedoIcon  from 'material-ui-icons/Redo';\nimport  RefreshIcon  from 'material-ui-icons/Refresh';\nimport  RemoveIcon  from 'material-ui-icons/Remove';\nimport  RemoveCircleIcon  from 'material-ui-icons/RemoveCircle';\nimport  RemoveCircleOutlineIcon  from 'material-ui-icons/RemoveCircleOutline';\nimport  RemoveFromQueueIcon  from 'material-ui-icons/RemoveFromQueue';\nimport  RemoveRedEyeIcon  from 'material-ui-icons/RemoveRedEye';\nimport  RemoveShoppingCartIcon  from 'material-ui-icons/RemoveShoppingCart';\nimport  ReorderIcon  from 'material-ui-icons/Reorder';\nimport  RepeatIcon  from 'material-ui-icons/Repeat';\nimport  RepeatOneIcon  from 'material-ui-icons/RepeatOne';\nimport  ReplayIcon  from 'material-ui-icons/Replay';\nimport  Replay10Icon  from 'material-ui-icons/Replay10';\nimport  Replay30Icon  from 'material-ui-icons/Replay30';\nimport  Replay5Icon  from 'material-ui-icons/Replay5';\nimport  ReplyIcon  from 'material-ui-icons/Reply';\nimport  ReplyAllIcon  from 'material-ui-icons/ReplyAll';\nimport  ReportIcon  from 'material-ui-icons/Report';\nimport  ReportProblemIcon  from 'material-ui-icons/ReportProblem';\nimport  RestaurantIcon  from 'material-ui-icons/Restaurant';\nimport  RestaurantMenuIcon  from 'material-ui-icons/RestaurantMenu';\nimport  RestoreIcon  from 'material-ui-icons/Restore';\nimport  RestorePageIcon  from 'material-ui-icons/RestorePage';\nimport  RingVolumeIcon  from 'material-ui-icons/RingVolume';\nimport  RoomIcon  from 'material-ui-icons/Room';\nimport  RoomServiceIcon  from 'material-ui-icons/RoomService';\nimport  Rotate90DegreesCcwIcon  from 'material-ui-icons/Rotate90DegreesCcw';\nimport  RotateLeftIcon  from 'material-ui-icons/RotateLeft';\nimport  RotateRightIcon  from 'material-ui-icons/RotateRight';\nimport  RoundedCornerIcon  from 'material-ui-icons/RoundedCorner';\nimport  RouterIcon  from 'material-ui-icons/Router';\nimport  RowingIcon  from 'material-ui-icons/Rowing';\nimport  RssFeedIcon  from 'material-ui-icons/RssFeed';\nimport  RvHookupIcon  from 'material-ui-icons/RvHookup';\nimport  SatelliteIcon  from 'material-ui-icons/Satellite';\nimport  SaveIcon  from 'material-ui-icons/Save';\nimport  ScannerIcon  from 'material-ui-icons/Scanner';\nimport  ScheduleIcon  from 'material-ui-icons/Schedule';\nimport  SchoolIcon  from 'material-ui-icons/School';\nimport  ScreenLockLandscapeIcon  from 'material-ui-icons/ScreenLockLandscape';\nimport  ScreenLockPortraitIcon  from 'material-ui-icons/ScreenLockPortrait';\nimport  ScreenLockRotationIcon  from 'material-ui-icons/ScreenLockRotation';\nimport  ScreenRotationIcon  from 'material-ui-icons/ScreenRotation';\nimport  ScreenShareIcon  from 'material-ui-icons/ScreenShare';\nimport  SdCardIcon  from 'material-ui-icons/SdCard';\nimport  SdStorageIcon  from 'material-ui-icons/SdStorage';\nimport  SearchIcon  from 'material-ui-icons/Search';\nimport  SecurityIcon  from 'material-ui-icons/Security';\nimport  SelectAllIcon  from 'material-ui-icons/SelectAll';\nimport  SendIcon  from 'material-ui-icons/Send';\nimport  SentimentDissatisfiedIcon  from 'material-ui-icons/SentimentDissatisfied';\nimport  SentimentNeutralIcon  from 'material-ui-icons/SentimentNeutral';\nimport  SentimentSatisfiedIcon  from 'material-ui-icons/SentimentSatisfied';\nimport  SentimentVeryDissatisfiedIcon  from 'material-ui-icons/SentimentVeryDissatisfied';\nimport  SentimentVerySatisfiedIcon  from 'material-ui-icons/SentimentVerySatisfied';\nimport  SettingsIcon  from 'material-ui-icons/Settings';\nimport  SettingsApplicationsIcon  from 'material-ui-icons/SettingsApplications';\nimport  SettingsBackupRestoreIcon  from 'material-ui-icons/SettingsBackupRestore';\nimport  SettingsBluetoothIcon  from 'material-ui-icons/SettingsBluetooth';\nimport  SettingsBrightnessIcon  from 'material-ui-icons/SettingsBrightness';\nimport  SettingsCellIcon  from 'material-ui-icons/SettingsCell';\nimport  SettingsEthernetIcon  from 'material-ui-icons/SettingsEthernet';\nimport  SettingsInputAntennaIcon  from 'material-ui-icons/SettingsInputAntenna';\nimport  SettingsInputComponentIcon  from 'material-ui-icons/SettingsInputComponent';\nimport  SettingsInputCompositeIcon  from 'material-ui-icons/SettingsInputComposite';\nimport  SettingsInputHdmiIcon  from 'material-ui-icons/SettingsInputHdmi';\nimport  SettingsInputSvideoIcon  from 'material-ui-icons/SettingsInputSvideo';\nimport  SettingsOverscanIcon  from 'material-ui-icons/SettingsOverscan';\nimport  SettingsPhoneIcon  from 'material-ui-icons/SettingsPhone';\nimport  SettingsPowerIcon  from 'material-ui-icons/SettingsPower';\nimport  SettingsRemoteIcon  from 'material-ui-icons/SettingsRemote';\nimport  SettingsSystemDaydreamIcon  from 'material-ui-icons/SettingsSystemDaydream';\nimport  SettingsVoiceIcon  from 'material-ui-icons/SettingsVoice';\nimport  ShareIcon  from 'material-ui-icons/Share';\nimport  ShopIcon  from 'material-ui-icons/Shop';\nimport  ShoppingBasketIcon  from 'material-ui-icons/ShoppingBasket';\nimport  ShoppingCartIcon  from 'material-ui-icons/ShoppingCart';\nimport  ShopTwoIcon  from 'material-ui-icons/ShopTwo';\nimport  ShortTextIcon  from 'material-ui-icons/ShortText';\nimport  ShowChartIcon  from 'material-ui-icons/ShowChart';\nimport  ShuffleIcon  from 'material-ui-icons/Shuffle';\nimport  SignalCellular0BarIcon  from 'material-ui-icons/SignalCellular0Bar';\nimport  SignalCellular1BarIcon  from 'material-ui-icons/SignalCellular1Bar';\nimport  SignalCellular2BarIcon  from 'material-ui-icons/SignalCellular2Bar';\nimport  SignalCellular3BarIcon  from 'material-ui-icons/SignalCellular3Bar';\nimport  SignalCellular4BarIcon  from 'material-ui-icons/SignalCellular4Bar';\nimport  SignalCellularConnectedNoInternet0BarIcon  from 'material-ui-icons/SignalCellularConnectedNoInternet0Bar';\nimport  SignalCellularConnectedNoInternet1BarIcon  from 'material-ui-icons/SignalCellularConnectedNoInternet1Bar';\nimport  SignalCellularConnectedNoInternet2BarIcon  from 'material-ui-icons/SignalCellularConnectedNoInternet2Bar';\nimport  SignalCellularConnectedNoInternet3BarIcon  from 'material-ui-icons/SignalCellularConnectedNoInternet3Bar';\nimport  SignalCellularConnectedNoInternet4BarIcon  from 'material-ui-icons/SignalCellularConnectedNoInternet4Bar';\nimport  SignalCellularNoSimIcon  from 'material-ui-icons/SignalCellularNoSim';\nimport  SignalCellularNullIcon  from 'material-ui-icons/SignalCellularNull';\nimport  SignalCellularOffIcon  from 'material-ui-icons/SignalCellularOff';\nimport  SignalWifi0BarIcon  from 'material-ui-icons/SignalWifi0Bar';\nimport  SignalWifi1BarIcon  from 'material-ui-icons/SignalWifi1Bar';\nimport  SignalWifi1BarLockIcon  from 'material-ui-icons/SignalWifi1BarLock';\nimport  SignalWifi2BarIcon  from 'material-ui-icons/SignalWifi2Bar';\nimport  SignalWifi2BarLockIcon  from 'material-ui-icons/SignalWifi2BarLock';\nimport  SignalWifi3BarIcon  from 'material-ui-icons/SignalWifi3Bar';\nimport  SignalWifi3BarLockIcon  from 'material-ui-icons/SignalWifi3BarLock';\nimport  SignalWifi4BarIcon  from 'material-ui-icons/SignalWifi4Bar';\nimport  SignalWifi4BarLockIcon  from 'material-ui-icons/SignalWifi4BarLock';\nimport  SignalWifiOffIcon  from 'material-ui-icons/SignalWifiOff';\nimport  SimCardIcon  from 'material-ui-icons/SimCard';\nimport  SimCardAlertIcon  from 'material-ui-icons/SimCardAlert';\nimport  SkipNextIcon  from 'material-ui-icons/SkipNext';\nimport  SkipPreviousIcon  from 'material-ui-icons/SkipPrevious';\nimport  SlideshowIcon  from 'material-ui-icons/Slideshow';\nimport  SlowMotionVideoIcon  from 'material-ui-icons/SlowMotionVideo';\nimport  SmartphoneIcon  from 'material-ui-icons/Smartphone';\nimport  SmokeFreeIcon  from 'material-ui-icons/SmokeFree';\nimport  SmokingRoomsIcon  from 'material-ui-icons/SmokingRooms';\nimport  SmsIcon  from 'material-ui-icons/Sms';\nimport  SmsFailedIcon  from 'material-ui-icons/SmsFailed';\nimport  SnoozeIcon  from 'material-ui-icons/Snooze';\nimport  SortIcon  from 'material-ui-icons/Sort';\nimport  SortByAlphaIcon  from 'material-ui-icons/SortByAlpha';\nimport  SpaIcon  from 'material-ui-icons/Spa';\nimport  SpaceBarIcon  from 'material-ui-icons/SpaceBar';\nimport  SpeakerIcon  from 'material-ui-icons/Speaker';\nimport  SpeakerGroupIcon  from 'material-ui-icons/SpeakerGroup';\nimport  SpeakerNotesIcon  from 'material-ui-icons/SpeakerNotes';\nimport  SpeakerNotesOffIcon  from 'material-ui-icons/SpeakerNotesOff';\nimport  SpeakerPhoneIcon  from 'material-ui-icons/SpeakerPhone';\nimport  SpellcheckIcon  from 'material-ui-icons/Spellcheck';\nimport  StarIcon  from 'material-ui-icons/Star';\nimport  StarBorderIcon  from 'material-ui-icons/StarBorder';\nimport  StarHalfIcon  from 'material-ui-icons/StarHalf';\nimport  StarsIcon  from 'material-ui-icons/Stars';\nimport  StayCurrentLandscapeIcon  from 'material-ui-icons/StayCurrentLandscape';\nimport  StayCurrentPortraitIcon  from 'material-ui-icons/StayCurrentPortrait';\nimport  StayPrimaryLandscapeIcon  from 'material-ui-icons/StayPrimaryLandscape';\nimport  StayPrimaryPortraitIcon  from 'material-ui-icons/StayPrimaryPortrait';\nimport  StopIcon  from 'material-ui-icons/Stop';\nimport  StopScreenShareIcon  from 'material-ui-icons/StopScreenShare';\nimport  StorageIcon  from 'material-ui-icons/Storage';\nimport  StoreIcon  from 'material-ui-icons/Store';\nimport  StoreMallDirectoryIcon  from 'material-ui-icons/StoreMallDirectory';\nimport  StraightenIcon  from 'material-ui-icons/Straighten';\nimport  StreetviewIcon  from 'material-ui-icons/Streetview';\nimport  StrikethroughSIcon  from 'material-ui-icons/StrikethroughS';\nimport  StyleIcon  from 'material-ui-icons/Style';\nimport  SubdirectoryArrowLeftIcon  from 'material-ui-icons/SubdirectoryArrowLeft';\nimport  SubdirectoryArrowRightIcon  from 'material-ui-icons/SubdirectoryArrowRight';\nimport  SubjectIcon  from 'material-ui-icons/Subject';\nimport  SubscriptionsIcon  from 'material-ui-icons/Subscriptions';\nimport  SubtitlesIcon  from 'material-ui-icons/Subtitles';\nimport  SubwayIcon  from 'material-ui-icons/Subway';\nimport  SupervisorAccountIcon  from 'material-ui-icons/SupervisorAccount';\nimport  SurroundSoundIcon  from 'material-ui-icons/SurroundSound';\nimport  SwapCallsIcon  from 'material-ui-icons/SwapCalls';\nimport  SwapHorizIcon  from 'material-ui-icons/SwapHoriz';\nimport  SwapVertIcon  from 'material-ui-icons/SwapVert';\nimport  SwapVerticalCircleIcon  from 'material-ui-icons/SwapVerticalCircle';\nimport  SwitchCameraIcon  from 'material-ui-icons/SwitchCamera';\nimport  SwitchVideoIcon  from 'material-ui-icons/SwitchVideo';\nimport  SyncIcon  from 'material-ui-icons/Sync';\nimport  SyncDisabledIcon  from 'material-ui-icons/SyncDisabled';\nimport  SyncProblemIcon  from 'material-ui-icons/SyncProblem';\nimport  SystemUpdateIcon  from 'material-ui-icons/SystemUpdate';\nimport  SystemUpdateAltIcon  from 'material-ui-icons/SystemUpdateAlt';\nimport  TabIcon  from 'material-ui-icons/Tab';\nimport  TabletIcon  from 'material-ui-icons/Tablet';\nimport  TabletAndroidIcon  from 'material-ui-icons/TabletAndroid';\nimport  TabletMacIcon  from 'material-ui-icons/TabletMac';\nimport  TabUnselectedIcon  from 'material-ui-icons/TabUnselected';\nimport  TagFacesIcon  from 'material-ui-icons/TagFaces';\nimport  TapAndPlayIcon  from 'material-ui-icons/TapAndPlay';\nimport  TerrainIcon  from 'material-ui-icons/Terrain';\nimport  TextFieldsIcon  from 'material-ui-icons/TextFields';\nimport  TextFormatIcon  from 'material-ui-icons/TextFormat';\nimport  TextsmsIcon  from 'material-ui-icons/Textsms';\nimport  TextureIcon  from 'material-ui-icons/Texture';\nimport  TheatersIcon  from 'material-ui-icons/Theaters';\nimport  ThreeDRotationIcon  from 'material-ui-icons/ThreeDRotation';\nimport  ThumbDownIcon  from 'material-ui-icons/ThumbDown';\nimport  ThumbsUpDownIcon  from 'material-ui-icons/ThumbsUpDown';\nimport  ThumbUpIcon  from 'material-ui-icons/ThumbUp';\nimport  TimelapseIcon  from 'material-ui-icons/Timelapse';\nimport  TimelineIcon  from 'material-ui-icons/Timeline';\nimport  TimerIcon  from 'material-ui-icons/Timer';\nimport  Timer10Icon  from 'material-ui-icons/Timer10';\nimport  Timer3Icon  from 'material-ui-icons/Timer3';\nimport  TimerOffIcon  from 'material-ui-icons/TimerOff';\nimport  TimeToLeaveIcon  from 'material-ui-icons/TimeToLeave';\nimport  TitleIcon  from 'material-ui-icons/Title';\nimport  TocIcon  from 'material-ui-icons/Toc';\nimport  TodayIcon  from 'material-ui-icons/Today';\nimport  TollIcon  from 'material-ui-icons/Toll';\nimport  TonalityIcon  from 'material-ui-icons/Tonality';\nimport  TouchAppIcon  from 'material-ui-icons/TouchApp';\nimport  ToysIcon  from 'material-ui-icons/Toys';\nimport  TrackChangesIcon  from 'material-ui-icons/TrackChanges';\nimport  TrafficIcon  from 'material-ui-icons/Traffic';\nimport  TrainIcon  from 'material-ui-icons/Train';\nimport  TramIcon  from 'material-ui-icons/Tram';\nimport  TransferWithinAStationIcon  from 'material-ui-icons/TransferWithinAStation';\nimport  TransformIcon  from 'material-ui-icons/Transform';\nimport  TranslateIcon  from 'material-ui-icons/Translate';\nimport  TrendingDownIcon  from 'material-ui-icons/TrendingDown';\nimport  TrendingFlatIcon  from 'material-ui-icons/TrendingFlat';\nimport  TrendingUpIcon  from 'material-ui-icons/TrendingUp';\nimport  TuneIcon  from 'material-ui-icons/Tune';\nimport  TurnedInIcon  from 'material-ui-icons/TurnedIn';\nimport  TurnedInNotIcon  from 'material-ui-icons/TurnedInNot';\nimport  TvIcon  from 'material-ui-icons/Tv';\nimport  UnarchiveIcon  from 'material-ui-icons/Unarchive';\nimport  UndoIcon  from 'material-ui-icons/Undo';\nimport  UnfoldLessIcon  from 'material-ui-icons/UnfoldLess';\nimport  UnfoldMoreIcon  from 'material-ui-icons/UnfoldMore';\nimport  UpdateIcon  from 'material-ui-icons/Update';\nimport  UsbIcon  from 'material-ui-icons/Usb';\nimport  VerifiedUserIcon  from 'material-ui-icons/VerifiedUser';\nimport  VerticalAlignBottomIcon  from 'material-ui-icons/VerticalAlignBottom';\nimport  VerticalAlignCenterIcon  from 'material-ui-icons/VerticalAlignCenter';\nimport  VerticalAlignTopIcon  from 'material-ui-icons/VerticalAlignTop';\nimport  VibrationIcon  from 'material-ui-icons/Vibration';\nimport  VideoCallIcon  from 'material-ui-icons/VideoCall';\nimport  VideocamIcon  from 'material-ui-icons/Videocam';\nimport  VideocamOffIcon  from 'material-ui-icons/VideocamOff';\nimport  VideogameAssetIcon  from 'material-ui-icons/VideogameAsset';\nimport  VideoLabelIcon  from 'material-ui-icons/VideoLabel';\nimport  VideoLibraryIcon  from 'material-ui-icons/VideoLibrary';\nimport  ViewAgendaIcon  from 'material-ui-icons/ViewAgenda';\nimport  ViewArrayIcon  from 'material-ui-icons/ViewArray';\nimport  ViewCarouselIcon  from 'material-ui-icons/ViewCarousel';\nimport  ViewColumnIcon  from 'material-ui-icons/ViewColumn';\nimport  ViewComfyIcon  from 'material-ui-icons/ViewComfy';\nimport  ViewCompactIcon  from 'material-ui-icons/ViewCompact';\nimport  ViewDayIcon  from 'material-ui-icons/ViewDay';\nimport  ViewHeadlineIcon  from 'material-ui-icons/ViewHeadline';\nimport  ViewListIcon  from 'material-ui-icons/ViewList';\nimport  ViewModuleIcon  from 'material-ui-icons/ViewModule';\nimport  ViewQuiltIcon  from 'material-ui-icons/ViewQuilt';\nimport  ViewStreamIcon  from 'material-ui-icons/ViewStream';\nimport  ViewWeekIcon  from 'material-ui-icons/ViewWeek';\nimport  VignetteIcon  from 'material-ui-icons/Vignette';\nimport  VisibilityIcon  from 'material-ui-icons/Visibility';\nimport  VisibilityOffIcon  from 'material-ui-icons/VisibilityOff';\nimport  VoiceChatIcon  from 'material-ui-icons/VoiceChat';\nimport  VoicemailIcon  from 'material-ui-icons/Voicemail';\nimport  VolumeDownIcon  from 'material-ui-icons/VolumeDown';\nimport  VolumeMuteIcon  from 'material-ui-icons/VolumeMute';\nimport  VolumeOffIcon  from 'material-ui-icons/VolumeOff';\nimport  VolumeUpIcon  from 'material-ui-icons/VolumeUp';\nimport  VpnKeyIcon  from 'material-ui-icons/VpnKey';\nimport  VpnLockIcon  from 'material-ui-icons/VpnLock';\nimport  WallpaperIcon  from 'material-ui-icons/Wallpaper';\nimport  WarningIcon  from 'material-ui-icons/Warning';\nimport  WatchIcon  from 'material-ui-icons/Watch';\nimport  WatchLaterIcon  from 'material-ui-icons/WatchLater';\nimport  WbAutoIcon  from 'material-ui-icons/WbAuto';\nimport  WbCloudyIcon  from 'material-ui-icons/WbCloudy';\nimport  WbIncandescentIcon  from 'material-ui-icons/WbIncandescent';\nimport  WbIridescentIcon  from 'material-ui-icons/WbIridescent';\nimport  WbSunnyIcon  from 'material-ui-icons/WbSunny';\nimport  WcIcon  from 'material-ui-icons/Wc';\nimport  WebIcon  from 'material-ui-icons/Web';\nimport  WebAssetIcon  from 'material-ui-icons/WebAsset';\nimport  WeekendIcon  from 'material-ui-icons/Weekend';\nimport  WhatshotIcon  from 'material-ui-icons/Whatshot';\nimport  WidgetsIcon  from 'material-ui-icons/Widgets';\nimport  WifiIcon  from 'material-ui-icons/Wifi';\nimport  WifiLockIcon  from 'material-ui-icons/WifiLock';\nimport  WifiTetheringIcon  from 'material-ui-icons/WifiTethering';\nimport  WorkIcon  from 'material-ui-icons/Work';\nimport  WrapTextIcon  from 'material-ui-icons/WrapText';\nimport  YoutubeSearchedForIcon  from 'material-ui-icons/YoutubeSearchedFor';\nimport  ZoomInIcon  from 'material-ui-icons/ZoomIn';\nimport  ZoomOutIcon  from 'material-ui-icons/ZoomOut';\nimport  ZoomOutMapIcon  from 'material-ui-icons/ZoomOutMap';\n\nexport {\n  AccessAlarmIcon,\n  AccessAlarmsIcon,\n  AccessibilityIcon,\n  AccessibleIcon,\n  AccessTimeIcon,\n  AccountBalanceIcon,\n  AccountBalanceWalletIcon,\n  AccountBoxIcon,\n  AccountCircleIcon,\n  AcUnitIcon,\n  AdbIcon,\n  AddIcon,\n  AddAlarmIcon,\n  AddAlertIcon,\n  AddAPhotoIcon,\n  AddBoxIcon,\n  AddCircleIcon,\n  AddCircleOutlineIcon,\n  AddLocationIcon,\n  AddShoppingCartIcon,\n  AddToPhotosIcon,\n  AddToQueueIcon,\n  AdjustIcon,\n  AirlineSeatFlatIcon,\n  AirlineSeatFlatAngledIcon,\n  AirlineSeatIndividualSuiteIcon,\n  AirlineSeatLegroomExtraIcon,\n  AirlineSeatLegroomNormalIcon,\n  AirlineSeatLegroomReducedIcon,\n  AirlineSeatReclineExtraIcon,\n  AirlineSeatReclineNormalIcon,\n  AirplanemodeActiveIcon,\n  AirplanemodeInactiveIcon,\n  AirplayIcon,\n  AirportShuttleIcon,\n  AlarmIcon,\n  AlarmAddIcon,\n  AlarmOffIcon,\n  AlarmOnIcon,\n  AlbumIcon,\n  AllInclusiveIcon,\n  AllOutIcon,\n  AndroidIcon,\n  AnnouncementIcon,\n  AppsIcon,\n  ArchiveIcon,\n  ArrowBackIcon,\n  ArrowDownwardIcon,\n  ArrowDropDownIcon,\n  ArrowDropDownCircleIcon,\n  ArrowDropUpIcon,\n  ArrowForwardIcon,\n  ArrowUpwardIcon,\n  ArtTrackIcon,\n  AspectRatioIcon,\n  AssessmentIcon,\n  AssignmentIcon,\n  AssignmentIndIcon,\n  AssignmentLateIcon,\n  AssignmentReturnIcon,\n  AssignmentReturnedIcon,\n  AssignmentTurnedInIcon,\n  AssistantIcon,\n  AssistantPhotoIcon,\n  AttachFileIcon,\n  AttachmentIcon,\n  AttachMoneyIcon,\n  AudiotrackIcon,\n  AutorenewIcon,\n  AvTimerIcon,\n  BackspaceIcon,\n  BackupIcon,\n  Battery20Icon,\n  Battery30Icon,\n  Battery50Icon,\n  Battery60Icon,\n  Battery80Icon,\n  Battery90Icon,\n  BatteryAlertIcon,\n  BatteryCharging20Icon,\n  BatteryCharging30Icon,\n  BatteryCharging50Icon,\n  BatteryCharging60Icon,\n  BatteryCharging80Icon,\n  BatteryCharging90Icon,\n  BatteryChargingFullIcon,\n  BatteryFullIcon,\n  BatteryStdIcon,\n  BatteryUnknownIcon,\n  BeachAccessIcon,\n  BeenhereIcon,\n  BlockIcon,\n  BluetoothIcon,\n  BluetoothAudioIcon,\n  BluetoothConnectedIcon,\n  BluetoothDisabledIcon,\n  BluetoothSearchingIcon,\n  BlurCircularIcon,\n  BlurLinearIcon,\n  BlurOffIcon,\n  BlurOnIcon,\n  BookIcon,\n  BookmarkIcon,\n  BookmarkBorderIcon,\n  BorderAllIcon,\n  BorderBottomIcon,\n  BorderClearIcon,\n  BorderColorIcon,\n  BorderHorizontalIcon,\n  BorderInnerIcon,\n  BorderLeftIcon,\n  BorderOuterIcon,\n  BorderRightIcon,\n  BorderStyleIcon,\n  BorderTopIcon,\n  BorderVerticalIcon,\n  BrandingWatermarkIcon,\n  Brightness1Icon,\n  Brightness2Icon,\n  Brightness3Icon,\n  Brightness4Icon,\n  Brightness5Icon,\n  Brightness6Icon,\n  Brightness7Icon,\n  BrightnessAutoIcon,\n  BrightnessHighIcon,\n  BrightnessLowIcon,\n  BrightnessMediumIcon,\n  BrokenImageIcon,\n  BrushIcon,\n  BubbleChartIcon,\n  BugReportIcon,\n  BuildIcon,\n  BurstModeIcon,\n  BusinessIcon,\n  BusinessCenterIcon,\n  CachedIcon,\n  CakeIcon,\n  CallIcon,\n  CallEndIcon,\n  CallMadeIcon,\n  CallMergeIcon,\n  CallMissedIcon,\n  CallMissedOutgoingIcon,\n  CallReceivedIcon,\n  CallSplitIcon,\n  CallToActionIcon,\n  CameraIcon,\n  CameraAltIcon,\n  CameraEnhanceIcon,\n  CameraFrontIcon,\n  CameraRearIcon,\n  CameraRollIcon,\n  CancelIcon,\n  CardGiftcardIcon,\n  CardMembershipIcon,\n  CardTravelIcon,\n  CasinoIcon,\n  CastIcon,\n  CastConnectedIcon,\n  CenterFocusStrongIcon,\n  CenterFocusWeakIcon,\n  ChangeHistoryIcon,\n  ChatIcon,\n  ChatBubbleIcon,\n  ChatBubbleOutlineIcon,\n  CheckIcon,\n  CheckBoxIcon,\n  CheckBoxOutlineBlankIcon,\n  CheckCircleIcon,\n  ChevronLeftIcon,\n  ChevronRightIcon,\n  ChildCareIcon,\n  ChildFriendlyIcon,\n  ChromeReaderModeIcon,\n  ClassIcon,\n  ClearIcon,\n  ClearAllIcon,\n  CloseIcon,\n  ClosedCaptionIcon,\n  CloudIcon,\n  CloudCircleIcon,\n  CloudDoneIcon,\n  CloudDownloadIcon,\n  CloudOffIcon,\n  CloudQueueIcon,\n  CloudUploadIcon,\n  CodeIcon,\n  CollectionsIcon,\n  CollectionsBookmarkIcon,\n  ColorizeIcon,\n  ColorLensIcon,\n  CommentIcon,\n  CompareIcon,\n  CompareArrowsIcon,\n  ComputerIcon,\n  ConfirmationNumberIcon,\n  ContactMailIcon,\n  ContactPhoneIcon,\n  ContactsIcon,\n  ContentCopyIcon,\n  ContentCutIcon,\n  ContentPasteIcon,\n  ControlPointIcon,\n  ControlPointDuplicateIcon,\n  CopyrightIcon,\n  CreateIcon,\n  CreateNewFolderIcon,\n  CreditCardIcon,\n  CropIcon,\n  Crop169Icon,\n  Crop32Icon,\n  Crop54Icon,\n  Crop75Icon,\n  CropDinIcon,\n  CropFreeIcon,\n  CropLandscapeIcon,\n  CropOriginalIcon,\n  CropPortraitIcon,\n  CropRotateIcon,\n  CropSquareIcon,\n  DashboardIcon,\n  DataUsageIcon,\n  DateRangeIcon,\n  DehazeIcon,\n  DeleteIcon,\n  DeleteForeverIcon,\n  DeleteSweepIcon,\n  DescriptionIcon,\n  DesktopMacIcon,\n  DesktopWindowsIcon,\n  DetailsIcon,\n  DeveloperBoardIcon,\n  DeveloperModeIcon,\n  DeviceHubIcon,\n  DevicesIcon,\n  DevicesOtherIcon,\n  DialerSipIcon,\n  DialpadIcon,\n  DirectionsIcon,\n  DirectionsBikeIcon,\n  DirectionsBoatIcon,\n  DirectionsBusIcon,\n  DirectionsCarIcon,\n  DirectionsRailwayIcon,\n  DirectionsRunIcon,\n  DirectionsSubwayIcon,\n  DirectionsTransitIcon,\n  DirectionsWalkIcon,\n  DiscFullIcon,\n  DnsIcon,\n  DockIcon,\n  DomainIcon,\n  DoneIcon,\n  DoneAllIcon,\n  DoNotDisturbIcon,\n  DoNotDisturbAltIcon,\n  DoNotDisturbOffIcon,\n  DoNotDisturbOnIcon,\n  DonutLargeIcon,\n  DonutSmallIcon,\n  DraftsIcon,\n  DragHandleIcon,\n  DriveEtaIcon,\n  DvrIcon,\n  EditIcon,\n  EditLocationIcon,\n  EjectIcon,\n  EmailIcon,\n  EnhancedEncryptionIcon,\n  EqualizerIcon,\n  ErrorIcon,\n  ErrorOutlineIcon,\n  EuroSymbolIcon,\n  EventIcon,\n  EventAvailableIcon,\n  EventBusyIcon,\n  EventNoteIcon,\n  EventSeatIcon,\n  EvStationIcon,\n  ExitToAppIcon,\n  ExpandLessIcon,\n  ExpandMoreIcon,\n  ExplicitIcon,\n  ExploreIcon,\n  ExposureIcon,\n  ExposureNeg1Icon,\n  ExposureNeg2Icon,\n  ExposurePlus1Icon,\n  ExposurePlus2Icon,\n  ExposureZeroIcon,\n  ExtensionIcon,\n  FaceIcon,\n  FastForwardIcon,\n  FastRewindIcon,\n  FavoriteIcon,\n  FavoriteBorderIcon,\n  FeaturedPlayListIcon,\n  FeaturedVideoIcon,\n  FeedbackIcon,\n  FiberDvrIcon,\n  FiberManualRecordIcon,\n  FiberNewIcon,\n  FiberPinIcon,\n  FiberSmartRecordIcon,\n  FileDownloadIcon,\n  FileUploadIcon,\n  FilterIcon,\n  Filter1Icon,\n  Filter2Icon,\n  Filter3Icon,\n  Filter4Icon,\n  Filter5Icon,\n  Filter6Icon,\n  Filter7Icon,\n  Filter8Icon,\n  Filter9Icon,\n  Filter9PlusIcon,\n  FilterBAndWIcon,\n  FilterCenterFocusIcon,\n  FilterDramaIcon,\n  FilterFramesIcon,\n  FilterHdrIcon,\n  FilterListIcon,\n  FilterNoneIcon,\n  FilterTiltShiftIcon,\n  FilterVintageIcon,\n  FindInPageIcon,\n  FindReplaceIcon,\n  FingerprintIcon,\n  FirstPageIcon,\n  FitnessCenterIcon,\n  FlagIcon,\n  FlareIcon,\n  FlashAutoIcon,\n  FlashOffIcon,\n  FlashOnIcon,\n  FlightIcon,\n  FlightLandIcon,\n  FlightTakeoffIcon,\n  FlipIcon,\n  FlipToBackIcon,\n  FlipToFrontIcon,\n  FolderIcon,\n  FolderOpenIcon,\n  FolderSharedIcon,\n  FolderSpecialIcon,\n  FontDownloadIcon,\n  FormatAlignCenterIcon,\n  FormatAlignJustifyIcon,\n  FormatAlignLeftIcon,\n  FormatAlignRightIcon,\n  FormatBoldIcon,\n  FormatClearIcon,\n  FormatColorFillIcon,\n  FormatColorResetIcon,\n  FormatColorTextIcon,\n  FormatIndentDecreaseIcon,\n  FormatIndentIncreaseIcon,\n  FormatItalicIcon,\n  FormatLineSpacingIcon,\n  FormatListBulletedIcon,\n  FormatListNumberedIcon,\n  FormatPaintIcon,\n  FormatQuoteIcon,\n  FormatShapesIcon,\n  FormatSizeIcon,\n  FormatStrikethroughIcon,\n  FormatTextdirectionLToRIcon,\n  FormatTextdirectionRToLIcon,\n  FormatUnderlinedIcon,\n  ForumIcon,\n  ForwardIcon,\n  Forward10Icon,\n  Forward30Icon,\n  Forward5Icon,\n  FreeBreakfastIcon,\n  FullscreenIcon,\n  FullscreenExitIcon,\n  FunctionsIcon,\n  GamepadIcon,\n  GamesIcon,\n  GavelIcon,\n  GestureIcon,\n  GetAppIcon,\n  GifIcon,\n  GolfCourseIcon,\n  GpsFixedIcon,\n  GpsNotFixedIcon,\n  GpsOffIcon,\n  GradeIcon,\n  GradientIcon,\n  GrainIcon,\n  GraphicEqIcon,\n  GridOffIcon,\n  GridOnIcon,\n  GroupIcon,\n  GroupAddIcon,\n  GroupWorkIcon,\n  GTranslateIcon,\n  HdIcon,\n  HdrOffIcon,\n  HdrOnIcon,\n  HdrStrongIcon,\n  HdrWeakIcon,\n  HeadsetIcon,\n  HeadsetMicIcon,\n  HealingIcon,\n  HearingIcon,\n  HelpIcon,\n  HelpOutlineIcon,\n  HighlightIcon,\n  HighlightOffIcon,\n  HighQualityIcon,\n  HistoryIcon,\n  HomeIcon,\n  HotelIcon,\n  HotTubIcon,\n  HourglassEmptyIcon,\n  HourglassFullIcon,\n  HttpIcon,\n  HttpsIcon,\n  ImageIcon,\n  ImageAspectRatioIcon,\n  ImportantDevicesIcon,\n  ImportContactsIcon,\n  ImportExportIcon,\n  InboxIcon,\n  IndeterminateCheckBoxIcon,\n  InfoIcon,\n  InfoOutlineIcon,\n  InputIcon,\n  InsertChartIcon,\n  InsertCommentIcon,\n  InsertDriveFileIcon,\n  InsertEmoticonIcon,\n  InsertInvitationIcon,\n  InsertLinkIcon,\n  InsertPhotoIcon,\n  InvertColorsIcon,\n  InvertColorsOffIcon,\n  IsoIcon,\n  KeyboardIcon,\n  KeyboardArrowDownIcon,\n  KeyboardArrowLeftIcon,\n  KeyboardArrowRightIcon,\n  KeyboardArrowUpIcon,\n  KeyboardBackspaceIcon,\n  KeyboardCapslockIcon,\n  KeyboardHideIcon,\n  KeyboardReturnIcon,\n  KeyboardTabIcon,\n  KeyboardVoiceIcon,\n  KitchenIcon,\n  LabelIcon,\n  LabelOutlineIcon,\n  LandscapeIcon,\n  LanguageIcon,\n  LaptopIcon,\n  LaptopChromebookIcon,\n  LaptopMacIcon,\n  LaptopWindowsIcon,\n  LastPageIcon,\n  LaunchIcon,\n  LayersIcon,\n  LayersClearIcon,\n  LeakAddIcon,\n  LeakRemoveIcon,\n  LensIcon,\n  LibraryAddIcon,\n  LibraryBooksIcon,\n  LibraryMusicIcon,\n  LightbulbOutlineIcon,\n  LinearScaleIcon,\n  LineStyleIcon,\n  LineWeightIcon,\n  LinkIcon,\n  LinkedCameraIcon,\n  ListIcon,\n  LiveHelpIcon,\n  LiveTvIcon,\n  LocalActivityIcon,\n  LocalAirportIcon,\n  LocalAtmIcon,\n  LocalBarIcon,\n  LocalCafeIcon,\n  LocalCarWashIcon,\n  LocalConvenienceStoreIcon,\n  LocalDiningIcon,\n  LocalDrinkIcon,\n  LocalFloristIcon,\n  LocalGasStationIcon,\n  LocalGroceryStoreIcon,\n  LocalHospitalIcon,\n  LocalHotelIcon,\n  LocalLaundryServiceIcon,\n  LocalLibraryIcon,\n  LocalMallIcon,\n  LocalMoviesIcon,\n  LocalOfferIcon,\n  LocalParkingIcon,\n  LocalPharmacyIcon,\n  LocalPhoneIcon,\n  LocalPizzaIcon,\n  LocalPlayIcon,\n  LocalPostOfficeIcon,\n  LocalPrintshopIcon,\n  LocalSeeIcon,\n  LocalShippingIcon,\n  LocalTaxiIcon,\n  LocationCityIcon,\n  LocationDisabledIcon,\n  LocationOffIcon,\n  LocationOnIcon,\n  LocationSearchingIcon,\n  LockIcon,\n  LockOpenIcon,\n  LockOutlineIcon,\n  LooksIcon,\n  Looks3Icon,\n  Looks4Icon,\n  Looks5Icon,\n  Looks6Icon,\n  LooksOneIcon,\n  LooksTwoIcon,\n  LoopIcon,\n  LoupeIcon,\n  LowPriorityIcon,\n  LoyaltyIcon,\n  MailIcon,\n  MailOutlineIcon,\n  MapIcon,\n  MarkunreadIcon,\n  MarkunreadMailboxIcon,\n  MemoryIcon,\n  MenuIcon,\n  MergeTypeIcon,\n  MessageIcon,\n  MicIcon,\n  MicNoneIcon,\n  MicOffIcon,\n  MmsIcon,\n  ModeCommentIcon,\n  ModeEditIcon,\n  MonetizationOnIcon,\n  MoneyOffIcon,\n  MonochromePhotosIcon,\n  MoodIcon,\n  MoodBadIcon,\n  MoreIcon,\n  MoreHorizIcon,\n  MoreVertIcon,\n  MotorcycleIcon,\n  MouseIcon,\n  MoveToInboxIcon,\n  MovieIcon,\n  MovieCreationIcon,\n  MovieFilterIcon,\n  MultilineChartIcon,\n  MusicNoteIcon,\n  MusicVideoIcon,\n  MyLocationIcon,\n  NatureIcon,\n  NaturePeopleIcon,\n  NavigateBeforeIcon,\n  NavigateNextIcon,\n  NavigationIcon,\n  NearMeIcon,\n  NetworkCellIcon,\n  NetworkCheckIcon,\n  NetworkLockedIcon,\n  NetworkWifiIcon,\n  NewReleasesIcon,\n  NextWeekIcon,\n  NfcIcon,\n  NoEncryptionIcon,\n  NoSimIcon,\n  NoteIcon,\n  NoteAddIcon,\n  NotificationsIcon,\n  NotificationsActiveIcon,\n  NotificationsNoneIcon,\n  NotificationsOffIcon,\n  NotificationsPausedIcon,\n  NotInterestedIcon,\n  OfflinePinIcon,\n  OndemandVideoIcon,\n  OpacityIcon,\n  OpenInBrowserIcon,\n  OpenInNewIcon,\n  OpenWithIcon,\n  PagesIcon,\n  PageviewIcon,\n  PaletteIcon,\n  PanoramaIcon,\n  PanoramaFishEyeIcon,\n  PanoramaHorizontalIcon,\n  PanoramaVerticalIcon,\n  PanoramaWideAngleIcon,\n  PanToolIcon,\n  PartyModeIcon,\n  PauseIcon,\n  PauseCircleFilledIcon,\n  PauseCircleOutlineIcon,\n  PaymentIcon,\n  PeopleIcon,\n  PeopleOutlineIcon,\n  PermCameraMicIcon,\n  PermContactCalendarIcon,\n  PermDataSettingIcon,\n  PermDeviceInformationIcon,\n  PermIdentityIcon,\n  PermMediaIcon,\n  PermPhoneMsgIcon,\n  PermScanWifiIcon,\n  PersonIcon,\n  PersonAddIcon,\n  PersonalVideoIcon,\n  PersonOutlineIcon,\n  PersonPinIcon,\n  PersonPinCircleIcon,\n  PetsIcon,\n  PhoneIcon,\n  PhoneAndroidIcon,\n  PhoneBluetoothSpeakerIcon,\n  PhoneForwardedIcon,\n  PhoneInTalkIcon,\n  PhoneIphoneIcon,\n  PhonelinkIcon,\n  PhonelinkEraseIcon,\n  PhonelinkLockIcon,\n  PhonelinkOffIcon,\n  PhonelinkRingIcon,\n  PhonelinkSetupIcon,\n  PhoneLockedIcon,\n  PhoneMissedIcon,\n  PhonePausedIcon,\n  PhotoIcon,\n  PhotoAlbumIcon,\n  PhotoCameraIcon,\n  PhotoFilterIcon,\n  PhotoLibraryIcon,\n  PhotoSizeSelectActualIcon,\n  PhotoSizeSelectLargeIcon,\n  PhotoSizeSelectSmallIcon,\n  PictureAsPdfIcon,\n  PictureInPictureIcon,\n  PictureInPictureAltIcon,\n  PieChartIcon,\n  PieChartOutlinedIcon,\n  PinDropIcon,\n  PlaceIcon,\n  PlayArrowIcon,\n  PlayCircleFilledIcon,\n  PlayCircleOutlineIcon,\n  PlayForWorkIcon,\n  PlaylistAddIcon,\n  PlaylistAddCheckIcon,\n  PlaylistPlayIcon,\n  PlusOneIcon,\n  PollIcon,\n  PolymerIcon,\n  PoolIcon,\n  PortableWifiOffIcon,\n  PortraitIcon,\n  PowerIcon,\n  PowerInputIcon,\n  PowerSettingsNewIcon,\n  PregnantWomanIcon,\n  PresentToAllIcon,\n  PrintIcon,\n  PriorityHighIcon,\n  PublicIcon,\n  PublishIcon,\n  QueryBuilderIcon,\n  QuestionAnswerIcon,\n  QueueIcon,\n  QueueMusicIcon,\n  QueuePlayNextIcon,\n  RadioIcon,\n  RadioButtonCheckedIcon,\n  RadioButtonUncheckedIcon,\n  RateReviewIcon,\n  ReceiptIcon,\n  RecentActorsIcon,\n  RecordVoiceOverIcon,\n  RedeemIcon,\n  RedoIcon,\n  RefreshIcon,\n  RemoveIcon,\n  RemoveCircleIcon,\n  RemoveCircleOutlineIcon,\n  RemoveFromQueueIcon,\n  RemoveRedEyeIcon,\n  RemoveShoppingCartIcon,\n  ReorderIcon,\n  RepeatIcon,\n  RepeatOneIcon,\n  ReplayIcon,\n  Replay10Icon,\n  Replay30Icon,\n  Replay5Icon,\n  ReplyIcon,\n  ReplyAllIcon,\n  ReportIcon,\n  ReportProblemIcon,\n  RestaurantIcon,\n  RestaurantMenuIcon,\n  RestoreIcon,\n  RestorePageIcon,\n  RingVolumeIcon,\n  RoomIcon,\n  RoomServiceIcon,\n  Rotate90DegreesCcwIcon,\n  RotateLeftIcon,\n  RotateRightIcon,\n  RoundedCornerIcon,\n  RouterIcon,\n  RowingIcon,\n  RssFeedIcon,\n  RvHookupIcon,\n  SatelliteIcon,\n  SaveIcon,\n  ScannerIcon,\n  ScheduleIcon,\n  SchoolIcon,\n  ScreenLockLandscapeIcon,\n  ScreenLockPortraitIcon,\n  ScreenLockRotationIcon,\n  ScreenRotationIcon,\n  ScreenShareIcon,\n  SdCardIcon,\n  SdStorageIcon,\n  SearchIcon,\n  SecurityIcon,\n  SelectAllIcon,\n  SendIcon,\n  SentimentDissatisfiedIcon,\n  SentimentNeutralIcon,\n  SentimentSatisfiedIcon,\n  SentimentVeryDissatisfiedIcon,\n  SentimentVerySatisfiedIcon,\n  SettingsIcon,\n  SettingsApplicationsIcon,\n  SettingsBackupRestoreIcon,\n  SettingsBluetoothIcon,\n  SettingsBrightnessIcon,\n  SettingsCellIcon,\n  SettingsEthernetIcon,\n  SettingsInputAntennaIcon,\n  SettingsInputComponentIcon,\n  SettingsInputCompositeIcon,\n  SettingsInputHdmiIcon,\n  SettingsInputSvideoIcon,\n  SettingsOverscanIcon,\n  SettingsPhoneIcon,\n  SettingsPowerIcon,\n  SettingsRemoteIcon,\n  SettingsSystemDaydreamIcon,\n  SettingsVoiceIcon,\n  ShareIcon,\n  ShopIcon,\n  ShoppingBasketIcon,\n  ShoppingCartIcon,\n  ShopTwoIcon,\n  ShortTextIcon,\n  ShowChartIcon,\n  ShuffleIcon,\n  SignalCellular0BarIcon,\n  SignalCellular1BarIcon,\n  SignalCellular2BarIcon,\n  SignalCellular3BarIcon,\n  SignalCellular4BarIcon,\n  SignalCellularConnectedNoInternet0BarIcon,\n  SignalCellularConnectedNoInternet1BarIcon,\n  SignalCellularConnectedNoInternet2BarIcon,\n  SignalCellularConnectedNoInternet3BarIcon,\n  SignalCellularConnectedNoInternet4BarIcon,\n  SignalCellularNoSimIcon,\n  SignalCellularNullIcon,\n  SignalCellularOffIcon,\n  SignalWifi0BarIcon,\n  SignalWifi1BarIcon,\n  SignalWifi1BarLockIcon,\n  SignalWifi2BarIcon,\n  SignalWifi2BarLockIcon,\n  SignalWifi3BarIcon,\n  SignalWifi3BarLockIcon,\n  SignalWifi4BarIcon,\n  SignalWifi4BarLockIcon,\n  SignalWifiOffIcon,\n  SimCardIcon,\n  SimCardAlertIcon,\n  SkipNextIcon,\n  SkipPreviousIcon,\n  SlideshowIcon,\n  SlowMotionVideoIcon,\n  SmartphoneIcon,\n  SmokeFreeIcon,\n  SmokingRoomsIcon,\n  SmsIcon,\n  SmsFailedIcon,\n  SnoozeIcon,\n  SortIcon,\n  SortByAlphaIcon,\n  SpaIcon,\n  SpaceBarIcon,\n  SpeakerIcon,\n  SpeakerGroupIcon,\n  SpeakerNotesIcon,\n  SpeakerNotesOffIcon,\n  SpeakerPhoneIcon,\n  SpellcheckIcon,\n  StarIcon,\n  StarBorderIcon,\n  StarHalfIcon,\n  StarsIcon,\n  StayCurrentLandscapeIcon,\n  StayCurrentPortraitIcon,\n  StayPrimaryLandscapeIcon,\n  StayPrimaryPortraitIcon,\n  StopIcon,\n  StopScreenShareIcon,\n  StorageIcon,\n  StoreIcon,\n  StoreMallDirectoryIcon,\n  StraightenIcon,\n  StreetviewIcon,\n  StrikethroughSIcon,\n  StyleIcon,\n  SubdirectoryArrowLeftIcon,\n  SubdirectoryArrowRightIcon,\n  SubjectIcon,\n  SubscriptionsIcon,\n  SubtitlesIcon,\n  SubwayIcon,\n  SupervisorAccountIcon,\n  SurroundSoundIcon,\n  SwapCallsIcon,\n  SwapHorizIcon,\n  SwapVertIcon,\n  SwapVerticalCircleIcon,\n  SwitchCameraIcon,\n  SwitchVideoIcon,\n  SyncIcon,\n  SyncDisabledIcon,\n  SyncProblemIcon,\n  SystemUpdateIcon,\n  SystemUpdateAltIcon,\n  TabIcon,\n  TabletIcon,\n  TabletAndroidIcon,\n  TabletMacIcon,\n  TabUnselectedIcon,\n  TagFacesIcon,\n  TapAndPlayIcon,\n  TerrainIcon,\n  TextFieldsIcon,\n  TextFormatIcon,\n  TextsmsIcon,\n  TextureIcon,\n  TheatersIcon,\n  ThreeDRotationIcon,\n  ThumbDownIcon,\n  ThumbsUpDownIcon,\n  ThumbUpIcon,\n  TimelapseIcon,\n  TimelineIcon,\n  TimerIcon,\n  Timer10Icon,\n  Timer3Icon,\n  TimerOffIcon,\n  TimeToLeaveIcon,\n  TitleIcon,\n  TocIcon,\n  TodayIcon,\n  TollIcon,\n  TonalityIcon,\n  TouchAppIcon,\n  ToysIcon,\n  TrackChangesIcon,\n  TrafficIcon,\n  TrainIcon,\n  TramIcon,\n  TransferWithinAStationIcon,\n  TransformIcon,\n  TranslateIcon,\n  TrendingDownIcon,\n  TrendingFlatIcon,\n  TrendingUpIcon,\n  TuneIcon,\n  TurnedInIcon,\n  TurnedInNotIcon,\n  TvIcon,\n  UnarchiveIcon,\n  UndoIcon,\n  UnfoldLessIcon,\n  UnfoldMoreIcon,\n  UpdateIcon,\n  UsbIcon,\n  VerifiedUserIcon,\n  VerticalAlignBottomIcon,\n  VerticalAlignCenterIcon,\n  VerticalAlignTopIcon,\n  VibrationIcon,\n  VideoCallIcon,\n  VideocamIcon,\n  VideocamOffIcon,\n  VideogameAssetIcon,\n  VideoLabelIcon,\n  VideoLibraryIcon,\n  ViewAgendaIcon,\n  ViewArrayIcon,\n  ViewCarouselIcon,\n  ViewColumnIcon,\n  ViewComfyIcon,\n  ViewCompactIcon,\n  ViewDayIcon,\n  ViewHeadlineIcon,\n  ViewListIcon,\n  ViewModuleIcon,\n  ViewQuiltIcon,\n  ViewStreamIcon,\n  ViewWeekIcon,\n  VignetteIcon,\n  VisibilityIcon,\n  VisibilityOffIcon,\n  VoiceChatIcon,\n  VoicemailIcon,\n  VolumeDownIcon,\n  VolumeMuteIcon,\n  VolumeOffIcon,\n  VolumeUpIcon,\n  VpnKeyIcon,\n  VpnLockIcon,\n  WallpaperIcon,\n  WarningIcon,\n  WatchIcon,\n  WatchLaterIcon,\n  WbAutoIcon,\n  WbCloudyIcon,\n  WbIncandescentIcon,\n  WbIridescentIcon,\n  WbSunnyIcon,\n  WcIcon,\n  WebIcon,\n  WebAssetIcon,\n  WeekendIcon,\n  WhatshotIcon,\n  WidgetsIcon,\n  WifiIcon,\n  WifiLockIcon,\n  WifiTetheringIcon,\n  WorkIcon,\n  WrapTextIcon,\n  YoutubeSearchedForIcon,\n  ZoomInIcon,\n  ZoomOutIcon,\n  ZoomOutMapIcon,\n};",
        "indexFilePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/MUIIcons/index.js"
      },
      "Utilities": {
        "importPath": "modules/Utilities",
        "absolutePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/Utilities",
        "name": "Utilities",
        "components": {
          "Placeholder": {
            "importPath": "modules/Utilities/components/Placeholder",
            "absolutePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/Utilities/components/Placeholder",
            "name": "Placeholder",
            "defaults": [
              {
                "type": "Placeholder",
                "variant": "default",
                "props": {},
                "children": [],
                "namespace": "Utilities"
              }
            ],
            "absoluteIndexFilePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/Utilities/components/Placeholder/index.js"
          }
        },
        "indexSourceCode": "import Placeholder from './components/Placeholder';\n                \nexport {\n    Placeholder\n};\n",
        "indexFilePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/Utilities/index.js"
      },
      "MUI": {
        "importPath": "modules/MUI",
        "absolutePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/MUI",
        "name": "MUI",
        "components": {
          "ThemeProvider": {
            "importPath": "modules/MUI/components/ThemeProvider",
            "absolutePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/MUI/components/ThemeProvider",
            "name": "ThemeProvider",
            "defaults": [
              {
                "type": "ThemeProvider",
                "variant": "default",
                "props": {},
                "children": [
                  {
                    "type": "LayoutContainer",
                    "variant": "default",
                    "props": {
                      "gutter": 24
                    },
                    "children": [
                      {
                        "type": "LayoutItem",
                        "variant": "default",
                        "props": {
                          "xs": 12
                        },
                        "children": [
                          {
                            "type": "Placeholder",
                            "variant": "default",
                            "props": {},
                            "children": [],
                            "namespace": "Utilities"
                          }
                        ],
                        "namespace": "MUI"
                      }
                    ],
                    "namespace": "MUI"
                  }
                ],
                "namespace": "MUI"
              },
              {
                "type": "ThemeProvider",
                "namespace": "MUI",
                "variant": "3 cells",
                "props": {},
                "children": [
                  {
                    "type": "LayoutContainer",
                    "variant": "default",
                    "props": {
                      "gutter": 24
                    },
                    "children": [
                      {
                        "type": "LayoutItem",
                        "variant": "default",
                        "props": {
                          "xs": 4
                        },
                        "children": [
                          {
                            "type": "Placeholder",
                            "variant": "default",
                            "props": {},
                            "children": [],
                            "namespace": "Utilities"
                          }
                        ],
                        "namespace": "MUI"
                      },
                      {
                        "type": "LayoutItem",
                        "variant": "default",
                        "props": {
                          "xs": 4
                        },
                        "children": [
                          {
                            "type": "Placeholder",
                            "variant": "default",
                            "props": {},
                            "children": [],
                            "namespace": "Utilities"
                          }
                        ],
                        "namespace": "MUI"
                      },
                      {
                        "type": "LayoutItem",
                        "variant": "default",
                        "props": {
                          "xs": 4
                        },
                        "children": [
                          {
                            "type": "Placeholder",
                            "variant": "default",
                            "props": {},
                            "children": [],
                            "namespace": "Utilities"
                          }
                        ],
                        "namespace": "MUI"
                      }
                    ],
                    "namespace": "MUI"
                  }
                ]
              }
            ],
            "absoluteIndexFilePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/MUI/components/ThemeProvider/index.js"
          },
          "LayoutContainer": {
            "importPath": "modules/MUI/components/LayoutContainer",
            "absolutePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/MUI/components/LayoutContainer",
            "name": "LayoutContainer",
            "defaults": [
              {
                "type": "LayoutContainer",
                "variant": "default",
                "props": {
                  "gutter": 24
                },
                "children": [
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 12
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  }
                ],
                "namespace": "MUI"
              },
              {
                "type": "LayoutContainer",
                "namespace": "MUI",
                "variant": "row with 2 cells",
                "props": {
                  "gutter": 24
                },
                "children": [
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 6
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 6
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  }
                ]
              },
              {
                "type": "LayoutContainer",
                "namespace": "MUI",
                "variant": "row with 3 cells",
                "props": {
                  "gutter": 24
                },
                "children": [
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 4
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 4
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 4
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  }
                ]
              },
              {
                "type": "LayoutContainer",
                "namespace": "MUI",
                "variant": "row with auto layout",
                "props": {
                  "gutter": 24
                },
                "children": [
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": true
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": true
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": true
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": true
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": true
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  }
                ]
              },
              {
                "type": "LayoutContainer",
                "namespace": "MUI",
                "variant": "column 3 rows",
                "props": {
                  "gutter": 24,
                  "direction": "column",
                  "align": "center"
                },
                "children": [
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 4
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 4
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 4
                    },
                    "children": [
                      {
                        "type": "Placeholder",
                        "variant": "default",
                        "props": {},
                        "children": [],
                        "namespace": "Utilities"
                      }
                    ],
                    "namespace": "MUI"
                  }
                ]
              },
              {
                "type": "LayoutContainer",
                "namespace": "MUI",
                "variant": "3 columns x 3 rows",
                "props": {
                  "gutter": 24
                },
                "children": [
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 4
                    },
                    "children": [
                      {
                        "type": "LayoutContainer",
                        "variant": "default",
                        "props": {
                          "gutter": 24,
                          "direction": "column",
                          "align": "center"
                        },
                        "children": [
                          {
                            "type": "LayoutItem",
                            "variant": "default",
                            "props": {
                              "xs": 12
                            },
                            "children": [
                              {
                                "type": "Placeholder",
                                "variant": "default",
                                "props": {},
                                "children": [],
                                "namespace": "Utilities"
                              }
                            ],
                            "namespace": "MUI"
                          },
                          {
                            "type": "LayoutItem",
                            "variant": "default",
                            "props": {
                              "xs": 12
                            },
                            "children": [
                              {
                                "type": "Placeholder",
                                "variant": "default",
                                "props": {},
                                "children": [],
                                "namespace": "Utilities"
                              }
                            ],
                            "namespace": "MUI"
                          },
                          {
                            "type": "LayoutItem",
                            "variant": "default",
                            "props": {
                              "xs": 12
                            },
                            "children": [
                              {
                                "type": "Placeholder",
                                "variant": "default",
                                "props": {},
                                "children": [],
                                "namespace": "Utilities"
                              }
                            ],
                            "namespace": "MUI"
                          }
                        ],
                        "namespace": "MUI"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 4
                    },
                    "children": [
                      {
                        "type": "LayoutContainer",
                        "variant": "default",
                        "props": {
                          "gutter": 24,
                          "direction": "column",
                          "align": "center"
                        },
                        "children": [
                          {
                            "type": "LayoutItem",
                            "variant": "default",
                            "props": {
                              "xs": 12
                            },
                            "children": [
                              {
                                "type": "Placeholder",
                                "variant": "default",
                                "props": {},
                                "children": [],
                                "namespace": "Utilities"
                              }
                            ],
                            "namespace": "MUI"
                          },
                          {
                            "type": "LayoutItem",
                            "variant": "default",
                            "props": {
                              "xs": 12
                            },
                            "children": [
                              {
                                "type": "Placeholder",
                                "variant": "default",
                                "props": {},
                                "children": [],
                                "namespace": "Utilities"
                              }
                            ],
                            "namespace": "MUI"
                          },
                          {
                            "type": "LayoutItem",
                            "variant": "default",
                            "props": {
                              "xs": 12
                            },
                            "children": [
                              {
                                "type": "Placeholder",
                                "variant": "default",
                                "props": {},
                                "children": [],
                                "namespace": "Utilities"
                              }
                            ],
                            "namespace": "MUI"
                          }
                        ],
                        "namespace": "MUI"
                      }
                    ],
                    "namespace": "MUI"
                  },
                  {
                    "type": "LayoutItem",
                    "variant": "default",
                    "props": {
                      "xs": 4
                    },
                    "children": [
                      {
                        "type": "LayoutContainer",
                        "variant": "default",
                        "props": {
                          "gutter": 24,
                          "direction": "column",
                          "align": "center"
                        },
                        "children": [
                          {
                            "type": "LayoutItem",
                            "variant": "default",
                            "props": {
                              "xs": 12
                            },
                            "children": [
                              {
                                "type": "Placeholder",
                                "variant": "default",
                                "props": {},
                                "children": [],
                                "namespace": "Utilities"
                              }
                            ],
                            "namespace": "MUI"
                          },
                          {
                            "type": "LayoutItem",
                            "variant": "default",
                            "props": {
                              "xs": 12
                            },
                            "children": [
                              {
                                "type": "Placeholder",
                                "variant": "default",
                                "props": {},
                                "children": [],
                                "namespace": "Utilities"
                              }
                            ],
                            "namespace": "MUI"
                          },
                          {
                            "type": "LayoutItem",
                            "variant": "default",
                            "props": {
                              "xs": 12
                            },
                            "children": [
                              {
                                "type": "Placeholder",
                                "variant": "default",
                                "props": {},
                                "children": [],
                                "namespace": "Utilities"
                              }
                            ],
                            "namespace": "MUI"
                          }
                        ],
                        "namespace": "MUI"
                      }
                    ],
                    "namespace": "MUI"
                  }
                ]
              }
            ],
            "absoluteIndexFilePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/MUI/components/LayoutContainer/index.js"
          },
          "LayoutItem": {
            "importPath": "modules/MUI/components/LayoutItem",
            "absolutePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/MUI/components/LayoutItem",
            "name": "LayoutItem",
            "defaults": [
              {
                "type": "LayoutItem",
                "variant": "default",
                "props": {
                  "xs": 3
                },
                "children": [
                  {
                    "type": "Placeholder",
                    "variant": "default",
                    "props": {},
                    "children": [],
                    "namespace": "Utilities"
                  }
                ],
                "namespace": "MUI"
              },
              {
                "type": "LayoutItem",
                "namespace": "MUI",
                "variant": "auto",
                "props": {
                  "xs": true
                },
                "children": [
                  {
                    "type": "Placeholder",
                    "variant": "default",
                    "props": {},
                    "children": [],
                    "namespace": "Utilities"
                  }
                ]
              },
              {
                "type": "LayoutItem",
                "namespace": "MUI",
                "variant": "xs = 4",
                "props": {
                  "xs": 4
                },
                "children": [
                  {
                    "type": "Placeholder",
                    "variant": "default",
                    "props": {},
                    "children": [],
                    "namespace": "Utilities"
                  }
                ]
              },
              {
                "type": "LayoutItem",
                "namespace": "MUI",
                "variant": "xs = 3",
                "props": {
                  "xs": 3
                },
                "children": [
                  {
                    "type": "Placeholder",
                    "variant": "default",
                    "props": {},
                    "children": [],
                    "namespace": "Utilities"
                  }
                ]
              },
              {
                "type": "LayoutItem",
                "namespace": "MUI",
                "variant": "xs = 12",
                "props": {
                  "xs": 12
                },
                "children": [
                  {
                    "type": "Placeholder",
                    "variant": "default",
                    "props": {},
                    "children": [],
                    "namespace": "Utilities"
                  }
                ]
              },
              {
                "type": "LayoutItem",
                "namespace": "MUI",
                "variant": "xs = 6",
                "props": {
                  "xs": 6
                },
                "children": [
                  {
                    "type": "Placeholder",
                    "variant": "default",
                    "props": {},
                    "children": [],
                    "namespace": "Utilities"
                  }
                ]
              }
            ],
            "absoluteIndexFilePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/MUI/components/LayoutItem/index.js"
          },
          "Avatar": {
            "importPath": "modules/MUI",
            "name": "Avatar",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Avatar",
                "variant": "default",
                "children": [],
                "namespace": "MUI",
                "props": {
                  "src": ""
                }
              }
            ]
          },
          "List": {
            "importPath": "modules/MUI",
            "name": "List",
            "isLibMember": true,
            "defaults": [
              {
                "type": "List",
                "variant": "default",
                "children": [
                  {
                    "type": "ListItem",
                    "variant": "default",
                    "children": [
                      {
                        "type": "ListItemText",
                        "variant": "default",
                        "children": [],
                        "namespace": "MUI",
                        "props": {
                          "primary": "Text"
                        }
                      }
                    ],
                    "namespace": "MUI",
                    "props": {
                      "button": true
                    }
                  },
                  {
                    "type": "ListItem",
                    "variant": "default",
                    "children": [
                      {
                        "type": "ListItemText",
                        "variant": "default",
                        "children": [],
                        "namespace": "MUI",
                        "props": {
                          "primary": "Text"
                        }
                      }
                    ],
                    "namespace": "MUI",
                    "props": {
                      "button": true
                    }
                  },
                  {
                    "type": "ListItem",
                    "variant": "default",
                    "children": [
                      {
                        "type": "ListItemText",
                        "variant": "default",
                        "children": [],
                        "namespace": "MUI",
                        "props": {
                          "primary": "Text"
                        }
                      }
                    ],
                    "namespace": "MUI",
                    "props": {
                      "button": true
                    }
                  }
                ],
                "namespace": "MUI",
                "props": {}
              }
            ]
          },
          "ListItem": {
            "importPath": "modules/MUI",
            "name": "ListItem",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ListItem",
                "variant": "default",
                "children": [
                  {
                    "type": "ListItemText",
                    "variant": "default",
                    "children": [],
                    "namespace": "MUI",
                    "props": {
                      "primary": "Text"
                    }
                  }
                ],
                "namespace": "MUI",
                "props": {
                  "button": true
                }
              }
            ]
          },
          "ListItemAvatar": {
            "importPath": "modules/MUI",
            "name": "ListItemAvatar",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ListItemAvatar",
                "variant": "default",
                "children": [],
                "namespace": "MUI"
              }
            ]
          },
          "ListItemIcon": {
            "importPath": "modules/MUI",
            "name": "ListItemIcon",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ListItemIcon",
                "variant": "default",
                "children": [
                  {
                    "type": "AddCircleIcon",
                    "variant": "default",
                    "children": [],
                    "namespace": "MUIIcons",
                    "props": {}
                  }
                ],
                "namespace": "MUI",
                "props": {
                  "button": true
                }
              }
            ]
          },
          "ListItemSecondaryAction": {
            "importPath": "modules/MUI",
            "name": "ListItemSecondaryAction",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ListItemSecondaryAction",
                "variant": "default",
                "children": [],
                "namespace": "MUI"
              }
            ]
          },
          "ListItemText": {
            "importPath": "modules/MUI",
            "name": "ListItemText",
            "isLibMember": true,
            "defaults": [
              {
                "type": "ListItemText",
                "variant": "default",
                "children": [],
                "namespace": "MUI"
              }
            ]
          },
          "Paper": {
            "importPath": "modules/MUI",
            "name": "Paper",
            "isLibMember": true,
            "defaults": [
              {
                "type": "Paper",
                "variant": "default",
                "children": [],
                "namespace": "MUI"
              }
            ]
          },
          "TextField": {
            "importPath": "modules/MUI",
            "name": "TextField",
            "isLibMember": true,
            "defaults": [
              {
                "type": "TextField",
                "variant": "default",
                "children": [],
                "namespace": "MUI",
                "props": {
                  "label": "Text"
                }
              },
              {
                "type": "TextField",
                "namespace": "MUI",
                "variant": "required",
                "props": {
                  "label": "Text",
                  "required": true
                },
                "children": []
              },
              {
                "type": "TextField",
                "namespace": "MUI",
                "variant": "with error",
                "props": {
                  "label": "Text",
                  "required": true,
                  "error": true
                },
                "children": []
              },
              {
                "type": "TextField",
                "namespace": "MUI",
                "variant": "multiline",
                "props": {
                  "label": "Multiline",
                  "multiline": true,
                  "rows": 4
                },
                "children": []
              }
            ]
          }
        },
        "indexSourceCode": "import ThemeProvider from \"./components/ThemeProvider\";\nimport LayoutContainer from \"./components/LayoutContainer\";\nimport LayoutItem from \"./components/LayoutItem\";\nimport Avatar from \"material-ui/Avatar\";\n// import Button from 'material-ui/Button';\n// import { Button, Select, Pagination } from \"antd\";\nimport Paper from \"material-ui/Paper\";\nimport TextField from \"material-ui/TextField\";\nimport List, {\n  ListItem,\n  ListItemAvatar,\n  ListItemIcon,\n  ListItemSecondaryAction,\n  ListItemText\n} from \"material-ui/List\";\nrequire(\"./css/styles.css\");\nexport {\n  ThemeProvider,\n  LayoutContainer,\n  LayoutItem,\n  // Pagination,\n  Avatar,\n  // Button,\n  // Select,\n  List,\n  ListItem,\n  ListItemAvatar,\n  ListItemIcon,\n  ListItemSecondaryAction,\n  ListItemText,\n  Paper,\n  TextField\n};\n",
        "indexFilePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/MUI/index.js"
      },
      "antd": {
        "importPath": "modules/antd",
        "absolutePath": "/Users/qinliang.ql/Desktop/structor-starter/app/modules/antd",
        "name": "antd"
      }
    },
    "indexFilePath": "/Users/qinliang.ql/Desktop/structor-starter/.structor/app/components.js",
    "indexSourceCode": "import { Link, IndexLink } from \"react-router\";\nimport * as DataAware from \"modules/DataAware\";\nimport * as MUIIcons from \"modules/MUIIcons\";\nimport { DatePicker, Pagination, Button } from \"antd\";\nimport * as Utilities from \"modules/Utilities\";\nimport * as MUI from \"modules/MUI\";\nimport * as antd from \"modules/antd\";\n\nexport {\n  Link,\n  IndexLink,\n  DatePicker,\n  Button,\n  DataAware,\n  Pagination,\n  MUIIcons,\n  Utilities,\n  MUI,\n  antd\n};\n",
//    htmlComponent
    "htmlComponents": {
      "a": {
        "name": "a",
        "defaults": [
          {
            "type": "a",
            "variant": "default",
            "props": {
              "href": "#"
            },
            "children": [
              {
                "type": "span",
                "text": "Link text"
              }
            ]
          }
        ]
      },
      "article": {
        "name": "article",
        "defaults": [
          {
            "type": "article",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "p",
                "children": [
                  {
                    "type": "span",
                    "text": "Article"
                  }
                ]
              }
            ]
          }
        ]
      },
      "aside": {
        "name": "aside",
        "defaults": [
          {
            "type": "aside",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "p",
                "children": [
                  {
                    "type": "span",
                    "text": "Aside"
                  }
                ]
              }
            ]
          }
        ]
      },
      "blockquote": {
        "name": "blockquote",
        "defaults": [
          {
            "type": "blockquote",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "p",
                "children": [
                  {
                    "type": "span",
                    "text": "This is a quotation"
                  }
                ]
              }
            ]
          }
        ]
      },
      "button": {
        "name": "button",
        "defaults": [
          {
            "type": "button",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Button"
              }
            ]
          }
        ]
      },
      "code": {
        "name": "code",
        "defaults": [
          {
            "type": "code",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Code text line"
              }
            ]
          }
        ]
      },
      "dd": {
        "name": "dd",
        "defaults": [
          {
            "type": "dd",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Description text line"
              }
            ]
          }
        ]
      },
      "div": {
        "name": "div",
        "defaults": [
          {
            "type": "div",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "div",
                "variant": "default",
                "props": {
                  "style": {
                    "display": "flex",
                    "justifyContent": "center",
                    "height": "100px",
                    "alignItems": "center",
                    "backgroundColor": "#fcecd7",
                    "borderRadius": "4px"
                  }
                },
                "children": [
                  {
                    "type": "span",
                    "text": "Empty div",
                    "props": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      "dl": {
        "name": "dl",
        "defaults": [
          {
            "type": "dl",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "dt",
                "children": [
                  {
                    "type": "span",
                    "text": "Main text"
                  }
                ]
              },
              {
                "type": "dd",
                "children": [
                  {
                    "type": "span",
                    "text": "Description text line"
                  }
                ]
              },
              {
                "type": "dt",
                "children": [
                  {
                    "type": "span",
                    "text": "Main text"
                  }
                ]
              },
              {
                "type": "dd",
                "children": [
                  {
                    "type": "span",
                    "text": "Description text line"
                  }
                ]
              }
            ]
          }
        ]
      },
      "dt": {
        "name": "dt",
        "defaults": [
          {
            "type": "dt",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Main text"
              }
            ]
          }
        ]
      },
      "em": {
        "name": "em",
        "defaults": [
          {
            "type": "em",
            "variant": "default",
            "props": {},
            "children": [],
            "text": "Text with emphasis"
          }
        ]
      },
      "fieldset": {
        "name": "fieldset",
        "defaults": [
          {
            "type": "fieldset",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Empty fieldset"
              }
            ]
          }
        ]
      },
      "footer": {
        "name": "footer",
        "defaults": [
          {
            "type": "footer",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "p",
                "children": [
                  {
                    "type": "span",
                    "text": "Footer"
                  }
                ]
              }
            ]
          }
        ]
      },
      "form": {
        "name": "form",
        "defaults": [
          {
            "type": "form",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "div",
                "variant": "default",
                "props": {
                  "style": {
                    "display": "flex",
                    "justifyContent": "center",
                    "height": "100px",
                    "alignItems": "center",
                    "backgroundColor": "#fcecd7",
                    "borderRadius": "4px"
                  }
                },
                "children": [
                  {
                    "type": "span",
                    "text": "Empty form",
                    "props": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      "h1": {
        "name": "h1",
        "defaults": [
          {
            "type": "h1",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Empty h1"
              }
            ]
          }
        ]
      },
      "h2": {
        "name": "h2",
        "defaults": [
          {
            "type": "h2",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Empty h2"
              }
            ]
          }
        ]
      },
      "h3": {
        "name": "h3",
        "defaults": [
          {
            "type": "h3",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Empty h3"
              }
            ]
          }
        ]
      },
      "h4": {
        "name": "h4",
        "defaults": [
          {
            "type": "h4",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Empty h4"
              }
            ]
          }
        ]
      },
      "h5": {
        "name": "h5",
        "defaults": [
          {
            "type": "h5",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Empty h5"
              }
            ]
          }
        ]
      },
      "header": {
        "name": "header",
        "defaults": [
          {
            "type": "header",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "p",
                "children": [
                  {
                    "type": "span",
                    "text": "Header"
                  }
                ]
              }
            ]
          }
        ]
      },
      "hr": {
        "name": "hr",
        "defaults": [
          {
            "type": "hr",
            "variant": "default",
            "props": {},
            "children": []
          }
        ]
      },
      "i": {
        "name": "i",
        "defaults": [
          {
            "type": "i",
            "variant": "default",
            "props": {
              "className": "fa fa-star"
            },
            "children": []
          }
        ]
      },
      "img": {
        "name": "img",
        "defaults": [
          {
            "type": "img",
            "variant": "default",
            "props": {
              "src": "http://lorempixel.com/600/337/nature/",
              "style": {
                "width": "100%"
              }
            },
            "children": []
          }
        ]
      },
      "input": {
        "name": "input",
        "defaults": [
          {
            "type": "input",
            "variant": "default",
            "props": {
              "type": "text",
              "placeholder": "Enter value"
            },
            "children": []
          }
        ]
      },
      "label": {
        "name": "label",
        "defaults": [
          {
            "type": "label",
            "variant": "default",
            "props": {},
            "children": [],
            "text": "Label Text"
          }
        ]
      },
      "li": {
        "name": "li",
        "defaults": [
          {
            "type": "li",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "List Item"
              }
            ]
          }
        ]
      },
      "main": {
        "name": "main",
        "defaults": [
          {
            "type": "main",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "p",
                "children": [
                  {
                    "type": "span",
                    "text": "Main"
                  }
                ]
              }
            ]
          }
        ]
      },
      "nav": {
        "name": "nav",
        "defaults": [
          {
            "type": "nav",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "p",
                "children": [
                  {
                    "type": "span",
                    "text": "Navigation"
                  }
                ]
              }
            ]
          }
        ]
      },
      "ol": {
        "name": "ol",
        "defaults": [
          {
            "type": "ol",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "li",
                "children": [
                  {
                    "type": "span",
                    "text": "First Item"
                  }
                ]
              },
              {
                "type": "li",
                "children": [
                  {
                    "type": "span",
                    "text": "Second Item"
                  }
                ]
              },
              {
                "type": "li",
                "children": [
                  {
                    "type": "span",
                    "text": "Third Item"
                  }
                ]
              }
            ]
          }
        ]
      },
      "option": {
        "name": "option",
        "defaults": [
          {
            "type": "option",
            "variant": "default",
            "props": {},
            "children": [],
            "text": "select option"
          }
        ]
      },
      "p": {
        "name": "p",
        "defaults": [
          {
            "type": "p",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Empty p"
              }
            ]
          }
        ]
      },
      "path": {
        "name": "path",
        "defaults": [
          {
            "type": "path",
            "variant": "default",
            "props": {
              "d": "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
            },
            "children": []
          }
        ]
      },
      "pre": {
        "name": "pre",
        "defaults": [
          {
            "type": "pre",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Preformatted text line"
              }
            ]
          }
        ]
      },
      "select": {
        "name": "select",
        "defaults": [
          {
            "type": "select",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "option",
                "text": "option #1"
              },
              {
                "type": "option",
                "text": "option #2"
              },
              {
                "type": "option",
                "text": "option #3"
              },
              {
                "type": "option",
                "text": "option #4"
              },
              {
                "type": "option",
                "text": "option #5"
              }
            ]
          }
        ]
      },
      "small": {
        "name": "small",
        "defaults": [
          {
            "type": "small",
            "variant": "default",
            "props": {},
            "children": [],
            "text": "Small text"
          }
        ]
      },
      "span": {
        "name": "span",
        "defaults": [
          {
            "type": "span",
            "variant": "default",
            "props": {},
            "children": [],
            "text": "Text"
          }
        ]
      },
      "strong": {
        "name": "strong",
        "defaults": [
          {
            "type": "strong",
            "variant": "default",
            "props": {},
            "children": [],
            "text": "Strong text"
          }
        ]
      },
      "table": {
        "name": "table",
        "defaults": [
          {
            "type": "table",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "thead",
                "children": [
                  {
                    "type": "tr",
                    "children": [
                      {
                        "type": "th",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in th"
                          }
                        ]
                      },
                      {
                        "type": "th",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in th"
                          }
                        ]
                      },
                      {
                        "type": "th",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in th"
                          }
                        ]
                      },
                      {
                        "type": "th",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in th"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tbody",
                "children": [
                  {
                    "type": "tr",
                    "children": [
                      {
                        "type": "td",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in td"
                          }
                        ]
                      },
                      {
                        "type": "td",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in td"
                          }
                        ]
                      },
                      {
                        "type": "td",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in td"
                          }
                        ]
                      },
                      {
                        "type": "td",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in td"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "tr",
                    "children": [
                      {
                        "type": "td",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in td"
                          }
                        ]
                      },
                      {
                        "type": "td",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in td"
                          }
                        ]
                      },
                      {
                        "type": "td",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in td"
                          }
                        ]
                      },
                      {
                        "type": "td",
                        "children": [
                          {
                            "type": "span",
                            "text": "Text in td"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "tbody": {
        "name": "tbody",
        "defaults": [
          {
            "type": "tbody",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "tr",
                "children": [
                  {
                    "type": "td",
                    "children": [
                      {
                        "type": "span",
                        "text": "Text in td"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "td": {
        "name": "td",
        "defaults": [
          {
            "type": "td",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Text in td"
              }
            ]
          }
        ]
      },
      "th": {
        "name": "th",
        "defaults": [
          {
            "type": "th",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "span",
                "text": "Text in th"
              }
            ]
          }
        ]
      },
      "thead": {
        "name": "thead",
        "defaults": [
          {
            "type": "thead",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "tr",
                "children": [
                  {
                    "type": "th",
                    "children": [
                      {
                        "type": "span",
                        "text": "Text in th"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "tr": {
        "name": "tr",
        "defaults": [
          {
            "type": "tr",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "td",
                "children": [
                  {
                    "type": "span",
                    "text": "Text in td"
                  }
                ]
              }
            ]
          }
        ]
      },
      "ul": {
        "name": "ul",
        "defaults": [
          {
            "type": "ul",
            "variant": "default",
            "props": {},
            "children": [
              {
                "type": "li",
                "children": [
                  {
                    "type": "span",
                    "text": "First Item"
                  }
                ]
              },
              {
                "type": "li",
                "children": [
                  {
                    "type": "span",
                    "text": "Second Item"
                  }
                ]
              },
              {
                "type": "li",
                "children": [
                  {
                    "type": "span",
                    "text": "Third Item"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }