/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'world_map',
            type:'image',
            rect:['27px','5px','689px','376px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"worldmap.png",'0px','0px']
         },
         {
            id:'target_blue_new',
            type:'rect',
            rect:['485px','131px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'target_purple_new',
            type:'rect',
            rect:['555px','112px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'target_green_new',
            type:'rect',
            rect:['414px','161px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'target_red_new',
            type:'rect',
            rect:['572px','145px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'target_purple',
            type:'rect',
            rect:['561px','223px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'target_green',
            type:'rect',
            rect:['352px','38px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'target_blue',
            type:'rect',
            rect:['520px','131px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'target_red',
            type:'rect',
            rect:['113px','33px','auto','auto','auto','auto'],
            opacity:1,
            transform:[[],[],[],['1.00508','0.98684']]
         },
         {
            id:'target_yellow',
            type:'rect',
            rect:['373px','44px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'target_yellow2',
            type:'rect',
            rect:['325px','28px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'target_red2',
            type:'rect',
            rect:['337px','68px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'target_green2',
            type:'rect',
            rect:['164px','79px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'target_blue2',
            type:'rect',
            rect:['387px','69px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'target_purple2',
            type:'rect',
            rect:['500px','30px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'pointOut_blue_new',
            type:'rect',
            rect:['501px','108px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'pointOut_purple_new',
            type:'rect',
            rect:['571px','89px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'pointOut_green_new',
            type:'rect',
            rect:['431px','137px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'pointOut_red_new',
            type:'rect',
            rect:['589px','120px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'pointOut_purple',
            type:'rect',
            rect:['577px','200px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'pointOut_green',
            type:'rect',
            rect:['369px','14px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'pointOut_blue',
            type:'rect',
            rect:['536px','108px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'pointOut_red',
            type:'rect',
            rect:['130px','9px','auto','auto','auto','auto'],
            opacity:1,
            transform:[[],[],[],['1.00508','0.98684']]
         },
         {
            id:'pointOut_yellow2',
            type:'rect',
            rect:['341px','5px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'pointOut_red2',
            type:'rect',
            rect:['354px','44px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'pointOut_green2',
            type:'rect',
            rect:['180px','55px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'pointOut_blue2',
            type:'rect',
            rect:['384px','63px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'pointOut_purple2',
            type:'rect',
            rect:['516px','6px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'pointOut_yellow',
            type:'rect',
            rect:['635px','310px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'btn_purple',
            type:'rect',
            rect:['561px','257px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_green',
            type:'rect',
            rect:['352px','73px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_blue',
            type:'rect',
            rect:['520px','168px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_red',
            type:'rect',
            rect:['113px','71px','32px','44px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_yellow2',
            type:'rect',
            rect:['325px','64px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_red2',
            type:'rect',
            rect:['337px','105px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_green2',
            type:'rect',
            rect:['164px','114px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_blue2',
            type:'rect',
            rect:['387px','106px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_purple2',
            type:'rect',
            rect:['500px','64px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_yellow',
            type:'rect',
            rect:['373px','80px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_blue_new',
            type:'rect',
            rect:['485px','168px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_purple_new',
            type:'rect',
            rect:['555px','146px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_green_new',
            type:'rect',
            rect:['414px','196px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_red_new',
            type:'rect',
            rect:['572px','182px','32px','45px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'footer',
            type:'rect',
            rect:['235px','340px','auto','auto','auto','auto'],
            opacity:1,
            transform:[]
         },
         {
            id:'lowerInfo_yellow',
            type:'rect',
            rect:['60px','336px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_red',
            type:'rect',
            rect:['60','336','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_blue',
            type:'rect',
            rect:['60','336','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_green',
            type:'rect',
            rect:['60','336','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_purple',
            type:'rect',
            rect:['60','336','auto','auto','auto','auto']
         },
         {
            id:'lowerInfo_red_new',
            type:'rect',
            rect:['460px','415px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_purple_new',
            type:'rect',
            rect:['384px','294px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_green_new',
            type:'rect',
            rect:['-4px','408px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_blue_new',
            type:'rect',
            rect:['119px','411px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_yellow2',
            type:'rect',
            rect:['60','336','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_red2',
            type:'rect',
            rect:['60','336','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_blue2',
            type:'rect',
            rect:['60','336','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_green2',
            type:'rect',
            rect:['60','336','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'lowerInfo_purple2',
            type:'rect',
            rect:['60','336','auto','auto','auto','auto'],
            opacity:1
         }],
         symbolInstances: [
         {
            id:'lowerInfo_green',
            symbolName:'lowerInfo_green'
         },
         {
            id:'pointOut_green2',
            symbolName:'pointOut_green2'
         },
         {
            id:'pointOut_yellow2',
            symbolName:'pointOut_yellow2'
         },
         {
            id:'pointOut_blue',
            symbolName:'pointOut_blue'
         },
         {
            id:'pointOut_blue_new',
            symbolName:'pointOut_blue_new'
         },
         {
            id:'lowerInfo_purple_new',
            symbolName:'lowerInfo_purple_new'
         },
         {
            id:'lowerInfo_green_new',
            symbolName:'lowerInfo_green_new'
         },
         {
            id:'target_purple_new',
            symbolName:'target_purple_new'
         },
         {
            id:'pointOut_yellow',
            symbolName:'pointOut_yellow'
         },
         {
            id:'pointOut_purple2',
            symbolName:'pointOut_purple2'
         },
         {
            id:'lowerInfo_purple2',
            symbolName:'lowerInfo_purple2'
         },
         {
            id:'target_green_new',
            symbolName:'target_green_new'
         },
         {
            id:'target_green',
            symbolName:'target_green'
         },
         {
            id:'target_green2',
            symbolName:'target_green'
         },
         {
            id:'pointOut_green',
            symbolName:'pointOut_green'
         },
         {
            id:'lowerInfo_red',
            symbolName:'lowerInfo_red'
         },
         {
            id:'lowerInfo_yellow2',
            symbolName:'lowerInfo_yellow2'
         },
         {
            id:'target_red_new',
            symbolName:'target_red_new'
         },
         {
            id:'lowerInfo_purple',
            symbolName:'lowerInfo_purple'
         },
         {
            id:'target_red2',
            symbolName:'target_red'
         },
         {
            id:'lowerInfo_green2',
            symbolName:'lowerInfo_green2'
         },
         {
            id:'lowerInfo_red2',
            symbolName:'lowerInfo_red2'
         },
         {
            id:'lowerInfo_blue2',
            symbolName:'lowerInfo_blue2'
         },
         {
            id:'lowerInfo_blue_new',
            symbolName:'lowerInfo_blue_new'
         },
         {
            id:'pointOut_red_new',
            symbolName:'pointOut_red_new'
         },
         {
            id:'pointOut_red2',
            symbolName:'pointOut_red2'
         },
         {
            id:'target_blue_new',
            symbolName:'target_blue_new'
         },
         {
            id:'pointOut_purple',
            symbolName:'pointOut_purple'
         },
         {
            id:'lowerInfo_yellow',
            symbolName:'lowerInfo_yellow'
         },
         {
            id:'footer',
            symbolName:'footer'
         },
         {
            id:'target_blue2',
            symbolName:'target_blue'
         },
         {
            id:'lowerInfo_red_new',
            symbolName:'lowerInfo_red_new'
         },
         {
            id:'pointOut_blue2',
            symbolName:'pointOut_blue2'
         },
         {
            id:'pointOut_red',
            symbolName:'pointOut_red'
         },
         {
            id:'target_red',
            symbolName:'target_red'
         },
         {
            id:'pointOut_purple_new',
            symbolName:'pointOut_purple_new'
         },
         {
            id:'lowerInfo_blue',
            symbolName:'lowerInfo_blue'
         },
         {
            id:'target_yellow',
            symbolName:'target_yellow'
         },
         {
            id:'target_blue',
            symbolName:'target_blue'
         },
         {
            id:'target_purple',
            symbolName:'target_purple'
         },
         {
            id:'target_purple2',
            symbolName:'target_purple'
         },
         {
            id:'target_yellow2',
            symbolName:'target_yellow'
         },
         {
            id:'pointOut_green_new',
            symbolName:'pointOut_green_new'
         }
         ]
      },
   states: {
      "Base State": {
         "${_pointOut_blue2}": [
            ["style", "top", '63px'],
            ["style", "opacity", '1'],
            ["style", "left", '384px']
         ],
         "${_pointOut_green}": [
            ["style", "top", '14px'],
            ["style", "opacity", '1'],
            ["style", "left", '369px']
         ],
         "${_world_map}": [
            ["style", "top", '5px'],
            ["style", "height", '376px'],
            ["style", "opacity", '1'],
            ["style", "left", '27px'],
            ["style", "width", '689px']
         ],
         "${_target_yellow2}": [
            ["style", "top", '28px'],
            ["style", "opacity", '1'],
            ["style", "left", '325px']
         ],
         "${_pointOut_blue}": [
            ["style", "top", '108px'],
            ["style", "opacity", '1'],
            ["style", "left", '536px']
         ],
         "${_pointOut_purple2}": [
            ["style", "top", '6px'],
            ["style", "opacity", '1'],
            ["style", "left", '516px']
         ],
         "${_pointOut_purple_new}": [
            ["style", "top", '89px'],
            ["style", "opacity", '1'],
            ["style", "left", '571px']
         ],
         "${_pointOut_green_new}": [
            ["style", "top", '137px'],
            ["style", "opacity", '1'],
            ["style", "left", '431px']
         ],
         "${_target_blue_new}": [
            ["style", "top", '131px'],
            ["style", "opacity", '1'],
            ["style", "left", '485px']
         ],
         "${_btn_green}": [
            ["style", "top", '73px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "left", '352px'],
            ["style", "width", '32px']
         ],
         "${_lowerInfo_purple2}": [
            ["style", "opacity", '1']
         ],
         "${_target_blue2}": [
            ["style", "top", '69px'],
            ["style", "opacity", '1'],
            ["style", "left", '387px']
         ],
         "${_lowerInfo_red}": [
            ["style", "opacity", '1']
         ],
         "${_target_red2}": [
            ["style", "top", '68px'],
            ["style", "opacity", '1'],
            ["style", "left", '337px']
         ],
         "${_lowerInfo_green}": [
            ["style", "opacity", '1']
         ],
         "${_btn_green2}": [
            ["style", "top", '114px'],
            ["style", "left", '164px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '32px']
         ],
         "${_btn_red2}": [
            ["style", "top", '105px'],
            ["style", "left", '337px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '32px']
         ],
         "${_target_green2}": [
            ["style", "top", '79px'],
            ["style", "opacity", '1'],
            ["style", "left", '164px']
         ],
         "${_lowerInfo_yellow2}": [
            ["style", "opacity", '1']
         ],
         "${_lowerInfo_blue2}": [
            ["style", "opacity", '1']
         ],
         "${_pointOut_purple}": [
            ["style", "top", '200px'],
            ["style", "opacity", '1'],
            ["style", "left", '577px']
         ],
         "${_footer}": [
            ["style", "top", '340px'],
            ["style", "opacity", '1'],
            ["style", "left", '235px']
         ],
         "${_lowerInfo_green2}": [
            ["style", "opacity", '1']
         ],
         "${_lowerInfo_red2}": [
            ["style", "opacity", '1']
         ],
         "${_lowerInfo_blue}": [
            ["style", "opacity", '1']
         ],
         "${_lowerInfo_red_new}": [
            ["style", "top", '415px'],
            ["style", "opacity", '1'],
            ["style", "left", '460px']
         ],
         "${_pointOut_blue_new}": [
            ["style", "top", '108px'],
            ["style", "opacity", '1'],
            ["style", "left", '501px']
         ],
         "${_target_purple}": [
            ["style", "top", '223px'],
            ["style", "opacity", '1'],
            ["style", "left", '561px']
         ],
         "${_pointOut_red}": [
            ["style", "top", '9px'],
            ["transform", "scaleY", '0.98684'],
            ["transform", "scaleX", '1.00508'],
            ["style", "opacity", '1'],
            ["style", "left", '130px']
         ],
         "${_target_blue}": [
            ["style", "top", '131px'],
            ["style", "opacity", '1'],
            ["style", "left", '520px']
         ],
         "${_btn_blue}": [
            ["style", "top", '168px'],
            ["style", "left", '520px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '32px']
         ],
         "${_lowerInfo_green_new}": [
            ["style", "top", '408px'],
            ["style", "opacity", '1'],
            ["style", "left", '-4px']
         ],
         "${_target_yellow}": [
            ["style", "top", '44px'],
            ["style", "opacity", '1'],
            ["style", "left", '373px']
         ],
         "${_btn_green_new}": [
            ["style", "top", '196px'],
            ["style", "left", '414px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '32px']
         ],
         "${_target_purple_new}": [
            ["style", "top", '112px'],
            ["style", "opacity", '1'],
            ["style", "left", '555px']
         ],
         "${_target_green_new}": [
            ["style", "top", '161px'],
            ["style", "opacity", '1'],
            ["style", "left", '414px']
         ],
         "${_target_red_new}": [
            ["style", "top", '145px'],
            ["style", "opacity", '1'],
            ["style", "left", '572px']
         ],
         "${_mainTextCopy4}": [
            ["style", "text-align", '']
         ],
         "${_btn_purple_new}": [
            ["style", "top", '146px'],
            ["style", "left", '555px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '32px']
         ],
         "${_pointOut_red2}": [
            ["style", "top", '44px'],
            ["style", "opacity", '1'],
            ["style", "left", '354px']
         ],
         "${_btn_yellow2}": [
            ["style", "top", '64px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "left", '325px'],
            ["style", "width", '32px']
         ],
         "${_pointOut_red_new}": [
            ["style", "top", '120px'],
            ["style", "opacity", '1'],
            ["style", "left", '589px']
         ],
         "${_btn_red_new}": [
            ["style", "top", '182px'],
            ["style", "left", '572px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '32px']
         ],
         "${_pointOut_green2}": [
            ["style", "top", '55px'],
            ["style", "opacity", '1'],
            ["style", "left", '180px']
         ],
         "${_lowerInfo_purple_new}": [
            ["style", "top", '294px'],
            ["style", "opacity", '1'],
            ["style", "left", '384px']
         ],
         "${_target_red}": [
            ["style", "top", '33px'],
            ["transform", "scaleY", '0.98684'],
            ["transform", "scaleX", '1.00508'],
            ["style", "opacity", '1'],
            ["style", "left", '113px']
         ],
         "${_target_green}": [
            ["style", "top", '38px'],
            ["style", "opacity", '1'],
            ["style", "left", '352px']
         ],
         "${_btn_blue2}": [
            ["style", "top", '106px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "left", '387px'],
            ["style", "width", '32px']
         ],
         "${_pointOut_yellow2}": [
            ["style", "top", '5px'],
            ["style", "opacity", '1'],
            ["style", "left", '341px']
         ],
         "${_mainTextCopy3}": [
            ["style", "text-align", '']
         ],
         "${_pointOut_yellow}": [
            ["style", "top", '21px'],
            ["style", "opacity", '1'],
            ["style", "left", '389px']
         ],
         "${_lowerInfo_yellow}": [
            ["style", "top", '336px'],
            ["style", "opacity", '1'],
            ["style", "left", '60px']
         ],
         "${_btn_red}": [
            ["style", "top", '71px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '44px'],
            ["style", "opacity", '1'],
            ["style", "left", '113px'],
            ["style", "width", '32px']
         ],
         "${_btn_purple}": [
            ["style", "top", '257px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "left", '561px'],
            ["style", "width", '32px']
         ],
         "${_lowerInfo_blue_new}": [
            ["style", "top", '411px'],
            ["style", "opacity", '1'],
            ["style", "left", '119px']
         ],
         "${_btn_blue_new}": [
            ["style", "top", '168px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "left", '485px'],
            ["style", "width", '32px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '399px'],
            ["style", "width", '772px']
         ],
         "${_btn_yellow}": [
            ["style", "top", '80px'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "left", '373px'],
            ["style", "width", '32px']
         ],
         "${_target_purple2}": [
            ["style", "top", '30px'],
            ["style", "opacity", '1'],
            ["style", "left", '500px']
         ],
         "${_btn_purple2}": [
            ["style", "top", '64px'],
            ["style", "left", '500px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '45px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2850,
         autoPlay: true,
         timeline: [
            { id: "eid179", tween: [ "style", "${_pointOut_yellow}", "left", '389px', { fromValue: '389px'}], position: 2850, duration: 0 },
            { id: "eid181", tween: [ "style", "${_pointOut_yellow}", "top", '21px', { fromValue: '21px'}], position: 2850, duration: 0 },
            { id: "eid280", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2000, duration: 0 },
            { id: "eid85", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_yellow}', [] ], ""], position: 0 },
            { id: "eid287", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_purple_new}', [] ], ""], position: 0 },
            { id: "eid172", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_yellow2}', [] ], ""], position: 0 },
            { id: "eid104", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_red}', [] ], ""], position: 0 },
            { id: "eid284", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_blue_new}', [] ], ""], position: 0 },
            { id: "eid274", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_purple2}', [] ], ""], position: 0 },
            { id: "eid136", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_blue}', [] ], ""], position: 0 },
            { id: "eid205", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_red2}', [] ], ""], position: 0 },
            { id: "eid173", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_yellow2}', [] ], ""], position: 0 },
            { id: "eid147", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_green}', [] ], ""], position: 0 },
            { id: "eid285", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_blue_new}', [] ], ""], position: 0 },
            { id: "eid288", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_green_new}', [] ], ""], position: 0 },
            { id: "eid289", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_purple_new}', [] ], ""], position: 0 },
            { id: "eid290", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_red_new}', [] ], ""], position: 0 },
            { id: "eid291", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_green_new}', [] ], ""], position: 0 },
            { id: "eid283", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_blue_new}', [] ], ""], position: 0 },
            { id: "eid292", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_green_new}', [] ], ""], position: 0 },
            { id: "eid293", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_red_new}', [] ], ""], position: 0 },
            { id: "eid294", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_red_new}', [] ], ""], position: 0 },
            { id: "eid295", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_purple_new}', [] ], ""], position: 0 },
            { id: "eid134", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_blue}', [] ], ""], position: 0 },
            { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_purple}', [] ], ""], position: 0 },
            { id: "eid156", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_purple}', [] ], ""], position: 0 },
            { id: "eid269", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_green}', [] ], ""], position: 0 },
            { id: "eid267", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_red}', [] ], ""], position: 0 },
            { id: "eid273", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_blue2}', [] ], ""], position: 0 },
            { id: "eid268", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_blue}', [] ], ""], position: 0 },
            { id: "eid271", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_red2}', [] ], ""], position: 0 },
            { id: "eid182", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_yellow}', [] ], ""], position: 0 },
            { id: "eid216", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_red2}', [] ], ""], position: 0 },
            { id: "eid225", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_green2}', [] ], ""], position: 0 },
            { id: "eid11", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_yellow}', [] ], ""], position: 0 },
            { id: "eid264", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_purple2}', [] ], ""], position: 0 },
            { id: "eid276", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_green}', [] ], ""], position: 0 },
            { id: "eid272", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_green2}', [] ], ""], position: 0 },
            { id: "eid254", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_blue2}', [] ], ""], position: 0 },
            { id: "eid137", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_red}', [] ], ""], position: 0 },
            { id: "eid270", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_purple}', [] ], ""], position: 0 },
            { id: "eid265", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_pointOut_purple2}', [] ], ""], position: 0 },
            { id: "eid275", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_lowerInfo_yellow2}', [] ], ""], position: 0 },
            { id: "eid277", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_green2}', [] ], ""], position: 0 },
            { id: "eid235", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_target_blue2}', [] ], ""], position: 0 },
            { id: "eid105", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_red}', [] ], ""], position: 355 },
            { id: "eid286", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_blue_new}', [] ], ""], position: 355 },
            { id: "eid174", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_yellow2}', [] ], ""], position: 500 },
            { id: "eid296", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_red_new}', [] ], ""], position: 710 },
            { id: "eid279", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_green}', [] ], ""], position: 750 },
            { id: "eid86", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_yellow}', [] ], ""], position: 820 },
            { id: "eid206", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_red2}', [] ], ""], position: 935 },
            { id: "eid158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_purple}', [] ], ""], position: 1150 },
            { id: "eid278", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_green2}', [] ], ""], position: 1250 },
            { id: "eid297", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_green_new}', [] ], ""], position: 1250 },
            { id: "eid236", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_blue2}', [] ], ""], position: 1500 },
            { id: "eid298", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_purple_new}', [] ], ""], position: 1565 },
            { id: "eid135", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_blue}', [] ], ""], position: 1805 },
            { id: "eid266", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_target_purple2}', [] ], ""], position: 2000 }         ]
      }
   }
},
"target_yellow": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','77px','25px','5px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'shadowEllipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(47,47,47,1.00)']
   },
   {
      id: 'animIcon_yellow',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['0px','58','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'animIcon_yellow',
      symbolName: 'animIcon_yellow'
   }   ]
   },
   states: {
      "Base State": {
         "${_animIcon_yellow}": [
            ["style", "top", '103px'],
            ["style", "clip", [-45,32,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_shadowEllipse}": [
            ["color", "background-color", 'rgba(47,47,47,1.00)'],
            ["style", "top", '77px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px'],
            ["style", "width", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 865,
         autoPlay: true,
         timeline: [
            { id: "eid58", tween: [ "style", "${_animIcon_yellow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 165, easing: "easeOutBounce" },
            { id: "eid80", tween: [ "style", "${_shadowEllipse}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 615, easing: "easeOutBounce" },
            { id: "eid55", tween: [ "style", "${_animIcon_yellow}", "clip", [-36.79998779296875,32,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-45,32,0,0]}], position: 0, duration: 305 },
            { id: "eid54", tween: [ "style", "${_animIcon_yellow}", "top", '35px', { fromValue: '103px'}], position: 0, duration: 305, easing: "easeOutBounce" }         ]
      }
   }
},
"point_red": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['-45']],
      rect: ['-8px','28px','61px','3px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['38px','0px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'outerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['41px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'innerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(245,222,222,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '3px'],
            ["style", "top", '28px'],
            ["style", "left", '-8px'],
            ["style", "width", '61px']
         ],
         "${_innerEllipse}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(245,222,222,1.00)'],
            ["style", "left", '41px'],
            ["style", "width", '7px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '52px']
         ],
         "${_outerEllipse}": [
            ["style", "top", '0px'],
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "left", '38px'],
            ["style", "width", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"officeInfo_yellow": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','135px','36px','auto','auto'],
      id: 'textBack',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['6px','7px','123px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainText',
      text: 'POLAND // 1',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_textBack}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "height", '36px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '135px']
         ],
         "${_mainText}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '123px'],
            ["style", "left", '6px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"animIcon_yellow": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'icon_yellow',
      type: 'image',
      rect: ['0px','0px','32px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/icon_yellow.png','0px','0px']
   },
   {
      id: 'circle_yellow',
      type: 'image',
      rect: ['5px','6px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/circle_yellow.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_circle_yellow}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '32px']
         ],
         "${_icon_yellow}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid68", tween: [ "style", "${_circle_yellow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "transform", "${_circle_yellow}", "scaleY", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "transform", "${_circle_yellow}", "scaleX", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" }         ]
      }
   }
},
"lowerInfo_yellow": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(49,197,188,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy8}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '15px'],
            ["style", "width", '569px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(49,197,188,0.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"pointOut_yellow2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_yellow2',
      type: 'rect',
      rect: ['45px','0','auto','auto','auto','auto']
   },
   {
      id: 'point_yellow2',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'point_yellow2',
      symbolName: 'point_yellow'
   },
   {
      id: 'officeInfo_yellow2',
      symbolName: 'officeInfo_yellow2'
   }   ]
   },
   states: {
      "Base State": {
         "${_point_yellow2}": [
            ["style", "top", '76px'],
            ["style", "left", '-53px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_officeInfo_yellow2}": [
            ["style", "clip", [0,363.5999755859375,60,181.5999755859375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-137px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '227px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid215", tween: [ "style", "${_officeInfo_yellow2}", "left", '45px', { fromValue: '-137px'}], position: 250, duration: 250 },
            { id: "eid214", tween: [ "style", "${_officeInfo_yellow2}", "clip", [0,182,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,363.5999755859375,60,181.5999755859375]}], position: 250, duration: 250 },
            { id: "eid212", tween: [ "style", "${_point_yellow2}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 },
            { id: "eid213", tween: [ "style", "${_point_yellow2}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid211", tween: [ "style", "${_point_yellow2}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 }         ]
      }
   }
},
"target_red": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','77px','25px','5px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'shadowEllipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(47,47,47,1.00)']
   },
   {
      id: 'animIcon_red',
      type: 'rect',
      clip: ['rect(45px 32px -37px 0px)'],
      rect: ['0px','58px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'animIcon_red',
      symbolName: 'animIcon_red'
   }   ]
   },
   states: {
      "Base State": {
         "${_animIcon_red}": [
            ["style", "top", '103px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "clip", [-45,32,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_shadowEllipse}": [
            ["color", "background-color", 'rgba(47,47,47,1.00)'],
            ["style", "top", '77px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px'],
            ["style", "width", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 865,
         autoPlay: true,
         timeline: [
            { id: "eid116", tween: [ "style", "${_animIcon_red}", "clip", [-36.79998779296875,32,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-45,32,0,0]}], position: 0, duration: 305 },
            { id: "eid80", tween: [ "style", "${_shadowEllipse}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 615, easing: "easeOutBounce" },
            { id: "eid115", tween: [ "style", "${_animIcon_red}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 165, easing: "easeOutBounce" },
            { id: "eid114", tween: [ "style", "${_animIcon_red}", "top", '35px', { fromValue: '103px'}], position: 0, duration: 305, easing: "easeOutBounce" }         ]
      }
   }
},
"pointOut_red": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_red',
      type: 'rect',
      rect: ['45px','0','auto','auto','auto','auto']
   },
   {
      id: 'point_red',
      type: 'rect',
      rect: ['auto','24px','auto','auto','145px','auto']
   }],
   symbolInstances: [
   {
      id: 'point_red',
      symbolName: 'point_red'
   },
   {
      id: 'officeInfo_red',
      symbolName: 'officeInfo_red'
   }   ]
   },
   states: {
      "Base State": {
         "${_officeInfo_red}": [
            ["style", "left", '-107px'],
            ["style", "clip", [0,273,60,152], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_point_red}": [
            ["style", "top", '76px'],
            ["style", "right", '198px'],
            ["style", "left", 'auto'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '197px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid113", tween: [ "style", "${_officeInfo_red}", "clip", [0,152,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,273,60,152]}], position: 250, duration: 250 },
            { id: "eid29", tween: [ "style", "${_point_red}", "right", '145px', { fromValue: '198px'}], position: 0, duration: 210 },
            { id: "eid27", tween: [ "style", "${_point_red}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid25", tween: [ "style", "${_point_red}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid112", tween: [ "style", "${_officeInfo_red}", "left", '45px', { fromValue: '-107px'}], position: 250, duration: 250 }         ]
      }
   }
},
"animIcon_red": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'icon_yellow',
      type: 'image',
      rect: ['0px','0px','32px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/icon_red.png','0px','0px']
   },
   {
      id: 'circle_yellow',
      type: 'image',
      rect: ['5px','6px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/circle_red.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_circle_yellow}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${_icon_yellow}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid68", tween: [ "style", "${_circle_yellow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "transform", "${_circle_yellow}", "scaleY", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "transform", "${_circle_yellow}", "scaleX", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" }         ]
      }
   }
},
"officeInfo_red": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','136px','35px','auto','auto'],
      id: 'textBack',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['5px','7px','126px','24px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainText',
      text: 'CANADA // 3',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_textBack}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "height", '35px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '136px']
         ],
         "${_mainText}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '18px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '24px'],
            ["style", "left", '5px'],
            ["style", "width", '126px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"point_yellow": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['-45']],
      rect: ['-8px','28px','61px','3px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(235,165,56,1.00)']
   },
   {
      rect: ['38px','0px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'outerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(235,165,56,1.00)']
   },
   {
      rect: ['41px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'innerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(252,240,221,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '28px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '3px'],
            ["color", "background-color", 'rgba(235,165,56,1.00)'],
            ["style", "left", '-8px'],
            ["style", "width", '61px']
         ],
         "${_innerEllipse}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(252,240,221,1.00)'],
            ["style", "left", '41px'],
            ["style", "width", '7px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '52px']
         ],
         "${_outerEllipse}": [
            ["style", "top", '0px'],
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(235,165,56,1.00)'],
            ["style", "left", '38px'],
            ["style", "width", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"target_blue": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','77px','25px','5px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'shadowEllipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(47,47,47,1.00)']
   },
   {
      transform: [],
      id: 'animIcon_blue',
      type: 'rect',
      clip: ['rect(-37px 32px 45px 0px)'],
      rect: ['0px','58px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'animIcon_blue',
      symbolName: 'animIcon_blue'
   }   ]
   },
   states: {
      "Base State": {
         "${_animIcon_blue}": [
            ["style", "top", '103px'],
            ["style", "opacity", '0'],
            ["style", "clip", [-45,32,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_shadowEllipse}": [
            ["color", "background-color", 'rgba(47,47,47,1.00)'],
            ["style", "top", '77px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px'],
            ["style", "width", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 865,
         autoPlay: true,
         timeline: [
            { id: "eid132", tween: [ "style", "${_animIcon_blue}", "clip", [-36.79998779296875,32,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-45,32,0,0]}], position: 0, duration: 305 },
            { id: "eid80", tween: [ "style", "${_shadowEllipse}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 615, easing: "easeOutBounce" },
            { id: "eid130", tween: [ "style", "${_animIcon_blue}", "top", '35px', { fromValue: '103px'}], position: 0, duration: 305, easing: "easeOutBounce" },
            { id: "eid131", tween: [ "style", "${_animIcon_blue}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 165, easing: "easeOutBounce" }         ]
      }
   }
},
"point_blue": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-8px','28px','61px','3px','auto','auto'],
      transform: [[],['-45']],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['38px','0px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'outerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['41px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'innerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(212,237,244,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_outerEllipse}": [
            ["style", "top", '0px'],
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "left", '38px'],
            ["style", "width", '14px']
         ],
         "${_innerEllipse}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(212,237,244,1.00)'],
            ["style", "left", '41px'],
            ["style", "width", '7px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '3px'],
            ["style", "top", '28px'],
            ["style", "left", '-8px'],
            ["style", "width", '61px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pointOut_blue": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_blue',
      type: 'rect',
      rect: ['45px','0','auto','auto','auto','auto']
   },
   {
      id: 'point_blue',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'point_blue',
      symbolName: 'point_blue'
   },
   {
      id: 'officeInfo_blue',
      symbolName: 'officeInfo_blue'
   }   ]
   },
   states: {
      "Base State": {
         "${_point_blue}": [
            ["style", "top", '76px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-53px']
         ],
         "${_officeInfo_blue}": [
            ["style", "left", '-107px'],
            ["style", "clip", [0,273,60,152], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '197px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid117", tween: [ "style", "${_officeInfo_blue}", "left", '45px', { fromValue: '-107px'}], position: 250, duration: 250 },
            { id: "eid127", tween: [ "style", "${_point_blue}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid129", tween: [ "style", "${_point_blue}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 },
            { id: "eid118", tween: [ "style", "${_officeInfo_blue}", "clip", [0,152,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,273,60,152]}], position: 250, duration: 250 },
            { id: "eid128", tween: [ "style", "${_point_blue}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 }         ]
      }
   }
},
"officeInfo_blue": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','148px','36px','auto','auto'],
      id: 'textBack',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['5px','8px','139px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainText',
      text: 'THAILAND // 1',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_textBack}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "height", '36px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '148px']
         ],
         "${_mainText}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '139px'],
            ["style", "left", '5px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '148px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"animIcon_blue": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'icon_yellow',
      type: 'image',
      rect: ['0px','0px','32px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/icon_blue.png','0px','0px']
   },
   {
      id: 'circle_yellow',
      type: 'image',
      rect: ['5px','6px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/circle_blue.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_circle_yellow}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${_icon_yellow}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid68", tween: [ "style", "${_circle_yellow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "transform", "${_circle_yellow}", "scaleY", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "transform", "${_circle_yellow}", "scaleX", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" }         ]
      }
   }
},
"animIcon_green": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'icon_yellow',
      type: 'image',
      rect: ['0px','0px','32px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/icon_green.png','0px','0px']
   },
   {
      id: 'circle_yellow',
      type: 'image',
      rect: ['5px','6px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/circle_green.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_circle_yellow}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${_icon_yellow}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid68", tween: [ "style", "${_circle_yellow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "transform", "${_circle_yellow}", "scaleY", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "transform", "${_circle_yellow}", "scaleX", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" }         ]
      }
   }
},
"animIcon_purple": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'icon_yellow',
      type: 'image',
      rect: ['0px','0px','32px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/icon_purple.png','0px','0px']
   },
   {
      id: 'circle_yellow',
      type: 'image',
      rect: ['5px','6px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/circle_purple.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_circle_yellow}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${_icon_yellow}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid68", tween: [ "style", "${_circle_yellow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "transform", "${_circle_yellow}", "scaleY", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "transform", "${_circle_yellow}", "scaleX", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" }         ]
      }
   }
},
"officeInfo_green": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','136px','35px','auto','auto'],
      id: 'textBack',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['18px','6px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainText',
      text: 'GERMANY // ',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mainText}": [
            ["style", "top", '6px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '18px'],
            ["style", "font-size", '18px']
         ],
         "${_textBack}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "height", '35px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '136px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"officeInfo_purple": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','136px','36px','auto','auto'],
      id: 'textBack',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['5px','8px','127px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainText',
      text: 'AUSTRALIA // 3',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mainText}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '127px'],
            ["style", "left", '5px'],
            ["style", "font-size", '18px']
         ],
         "${_textBack}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "height", '36px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '136px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pointOut_green": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_green',
      type: 'rect',
      rect: ['45','0','auto','auto','auto','auto']
   },
   {
      id: 'point_green',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'officeInfo_green',
      symbolName: 'officeInfo_green'
   },
   {
      id: 'point_green',
      symbolName: 'point_green'
   }   ]
   },
   states: {
      "Base State": {
         "${_point_green}": [
            ["style", "top", '76px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-53px']
         ],
         "${_officeInfo_green}": [
            ["style", "clip", [0,273,60,152], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-107px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '197px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid139", tween: [ "style", "${_point_green}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid141", tween: [ "style", "${_point_green}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 },
            { id: "eid142", tween: [ "style", "${_officeInfo_green}", "clip", [0,152,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,273,60,152]}], position: 250, duration: 250 },
            { id: "eid140", tween: [ "style", "${_point_green}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid143", tween: [ "style", "${_officeInfo_green}", "left", '45px', { fromValue: '-107px'}], position: 250, duration: 250 }         ]
      }
   }
},
"point_green": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['-45']],
      rect: ['-8px','28px','61px','3px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['38px','0px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'outerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['41px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'innerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(236,242,231,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_innerEllipse}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(236,242,231,1.00)'],
            ["style", "left", '41px'],
            ["style", "width", '7px']
         ],
         "${_Rectangle}": [
            ["style", "top", '28px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '3px'],
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "left", '-8px'],
            ["style", "width", '61px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '52px']
         ],
         "${_outerEllipse}": [
            ["style", "top", '0px'],
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "left", '38px'],
            ["style", "width", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"point_purple": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['-45']],
      rect: ['-8px','28px','61px','3px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['38px','0px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'outerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['41px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'innerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(221,214,242,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '28px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '3px'],
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "left", '-8px'],
            ["style", "width", '61px']
         ],
         "${_innerEllipse}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(221,214,242,1.00)'],
            ["style", "left", '41px'],
            ["style", "width", '7px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '52px']
         ],
         "${_outerEllipse}": [
            ["style", "top", '0px'],
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "left", '38px'],
            ["style", "width", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"target_green": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','77px','25px','5px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'shadowEllipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(47,47,47,1.00)']
   },
   {
      id: 'animIcon_green',
      type: 'rect',
      clip: ['rect(-36.800018310546875px 32px 45px 0px)'],
      rect: ['0','35','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'animIcon_green',
      symbolName: 'animIcon_green'
   }   ]
   },
   states: {
      "Base State": {
         "${_shadowEllipse}": [
            ["color", "background-color", 'rgba(47,47,47,1.00)'],
            ["style", "top", '77px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px'],
            ["style", "width", '25px']
         ],
         "${_animIcon_green}": [
            ["style", "top", '103px'],
            ["style", "opacity", '0'],
            ["style", "clip", [-45,32,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 865,
         autoPlay: true,
         timeline: [
            { id: "eid145", tween: [ "style", "${_animIcon_green}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 165, easing: "easeOutBounce" },
            { id: "eid80", tween: [ "style", "${_shadowEllipse}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 615, easing: "easeOutBounce" },
            { id: "eid144", tween: [ "style", "${_animIcon_green}", "top", '35px', { fromValue: '103px'}], position: 0, duration: 305, easing: "easeOutBounce" },
            { id: "eid146", tween: [ "style", "${_animIcon_green}", "clip", [-36.79998779296875,32,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-45,32,0,0]}], position: 0, duration: 305 }         ]
      }
   }
},
"pointOut_purple": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_purple',
      type: 'rect',
      rect: ['45','0','auto','auto','auto','auto']
   },
   {
      id: 'point_purple',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'officeInfo_purple',
      symbolName: 'officeInfo_purple'
   },
   {
      id: 'point_purple',
      symbolName: 'point_purple'
   }   ]
   },
   states: {
      "Base State": {
         "${_officeInfo_purple}": [
            ["style", "clip", [0,273,60,152], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-107px']
         ],
         "${_point_purple}": [
            ["style", "top", '76px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '197px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid152", tween: [ "style", "${_officeInfo_purple}", "left", '45px', { fromValue: '-107px'}], position: 250, duration: 250 },
            { id: "eid154", tween: [ "style", "${_point_purple}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid153", tween: [ "style", "${_point_purple}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid155", tween: [ "style", "${_point_purple}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 },
            { id: "eid151", tween: [ "style", "${_officeInfo_purple}", "clip", [0,152,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,273,60,152]}], position: 250, duration: 250 }         ]
      }
   }
},
"target_purple": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','77px','25px','5px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'shadowEllipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(47,47,47,1.00)']
   },
   {
      id: 'animIcon_purple',
      type: 'rect',
      clip: ['rect(-37px 32px 45px 0px)'],
      rect: ['0','35px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'animIcon_purple',
      symbolName: 'animIcon_purple'
   }   ]
   },
   states: {
      "Base State": {
         "${_animIcon_purple}": [
            ["style", "top", '103px'],
            ["style", "opacity", '0'],
            ["style", "clip", [-45,32,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_shadowEllipse}": [
            ["color", "background-color", 'rgba(47,47,47,1.00)'],
            ["style", "top", '77px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px'],
            ["style", "width", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 865,
         autoPlay: true,
         timeline: [
            { id: "eid150", tween: [ "style", "${_animIcon_purple}", "clip", [-36.79998779296875,32,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-45,32,0,0]}], position: 0, duration: 305 },
            { id: "eid80", tween: [ "style", "${_shadowEllipse}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 615, easing: "easeOutBounce" },
            { id: "eid148", tween: [ "style", "${_animIcon_purple}", "top", '35px', { fromValue: '103px'}], position: 0, duration: 305, easing: "easeOutBounce" },
            { id: "eid149", tween: [ "style", "${_animIcon_purple}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 165, easing: "easeOutBounce" }         ]
      }
   }
},
"officeInfo_yellow2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','136px','37px','auto','auto'],
      id: 'textBack',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['8px','7px','122px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainText',
      text: 'U.K. // 21',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mainText}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '122px'],
            ["style", "left", '8px'],
            ["style", "font-size", '18px']
         ],
         "${_textBack}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "height", '37px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '136px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pointOut_yellow": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_yellow',
      type: 'rect',
      rect: ['45','0','auto','auto','auto','auto']
   },
   {
      id: 'point_yellow',
      type: 'rect',
      rect: ['0px','24px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'officeInfo_yellow',
      symbolName: 'officeInfo_yellow'
   },
   {
      id: 'point_yellow',
      symbolName: 'point_yellow'
   }   ]
   },
   states: {
      "Base State": {
         "${_point_yellow}": [
            ["style", "top", '76px'],
            ["style", "left", '-53px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_officeInfo_yellow}": [
            ["style", "top", '0px'],
            ["style", "clip", [0.7999879717826843,302.4000244140625,60.79998779296875,152], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-107px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '197px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid188", tween: [ "style", "${_officeInfo_yellow}", "left", '45px', { fromValue: '-107px'}], position: 250, duration: 250 },
            { id: "eid109", tween: [ "style", "${_point_yellow}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid192", tween: [ "style", "${_officeInfo_yellow}", "top", '0px', { fromValue: '0px'}], position: 250, duration: 0 },
            { id: "eid193", tween: [ "style", "${_officeInfo_yellow}", "top", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid108", tween: [ "style", "${_point_yellow}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 },
            { id: "eid184", tween: [ "style", "${_officeInfo_yellow}", "clip", [0,152,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0.7999879717826843,302.4000244140625,60.79998779296875,152]}], position: 250, duration: 250 },
            { id: "eid107", tween: [ "style", "${_point_yellow}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 }         ]
      }
   }
},
"officeInfo_red2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','134px','35px','auto','auto'],
      id: 'textBack',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['5px','7px','121px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainText',
      text: 'FRANCE // 1',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '136px']
         ],
         "${_textBack}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "height", '35px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '134px']
         ],
         "${_TextCopy10}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '15px'],
            ["style", "width", '569px']
         ],
         "${_mainText}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '121px'],
            ["style", "left", '5px'],
            ["style", "font-size", '18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pointOut_red2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_red2',
      type: 'rect',
      rect: ['45','0','auto','auto','auto','auto']
   },
   {
      id: 'point_red',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'officeInfo_red2',
      symbolName: 'officeInfo_red2'
   },
   {
      id: 'point_red',
      symbolName: 'point_red'
   }   ]
   },
   states: {
      "Base State": {
         "${_officeInfo_red2}": [
            ["style", "left", '-137px'],
            ["style", "clip", [0,363.5999755859375,60,181.5999755859375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_point_red}": [
            ["style", "top", '76px'],
            ["style", "left", '-53px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '227px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid201", tween: [ "style", "${_point_red}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 },
            { id: "eid200", tween: [ "style", "${_point_red}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid204", tween: [ "style", "${_officeInfo_red2}", "clip", [0,182,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,363.5999755859375,60,181.5999755859375]}], position: 250, duration: 250 },
            { id: "eid202", tween: [ "style", "${_point_red}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid203", tween: [ "style", "${_officeInfo_red2}", "left", '45px', { fromValue: '-137px'}], position: 250, duration: 250 }         ]
      }
   }
},
"pointOut_green2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_green2',
      type: 'rect',
      rect: ['45px','0','auto','auto','auto','auto']
   },
   {
      id: 'point_green',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'point_green',
      symbolName: 'point_green'
   },
   {
      id: 'officeInfo_green2',
      symbolName: 'officeInfo_green2'
   }   ]
   },
   states: {
      "Base State": {
         "${_point_green}": [
            ["style", "top", '76px'],
            ["style", "left", '-53px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '227px']
         ],
         "${_officeInfo_green2}": [
            ["style", "left", '-137px'],
            ["style", "clip", [0,363.5999755859375,60,181.5999755859375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid220", tween: [ "style", "${_point_green}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid224", tween: [ "style", "${_officeInfo_green2}", "clip", [0,182,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,363.5999755859375,60,181.5999755859375]}], position: 250, duration: 250 },
            { id: "eid221", tween: [ "style", "${_point_green}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 },
            { id: "eid223", tween: [ "style", "${_officeInfo_green2}", "left", '45px', { fromValue: '-137px'}], position: 250, duration: 250 },
            { id: "eid222", tween: [ "style", "${_point_green}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 }         ]
      }
   }
},
"officeInfo_green2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','137px','36px','auto','auto'],
      id: 'textBack',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['5px','7px','127px','22px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainText',
      text: 'U.S.A. // 70',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_textBack}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "height", '36px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '137px']
         ],
         "${_mainText}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["style", "height", '22px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '127px'],
            ["style", "left", '5px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pointOut_blue2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_blue2',
      type: 'rect',
      rect: ['45','0','auto','auto','auto','auto']
   },
   {
      id: 'point_blue',
      type: 'rect',
      clip: ['rect(0px 52px 35.199951171875px 16.800048828125px)'],
      rect: ['0','24px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'point_blue',
      symbolName: 'point_blue'
   },
   {
      id: 'officeInfo_blue2',
      symbolName: 'officeInfo_blue2'
   }   ]
   },
   states: {
      "Base State": {
         "${_point_blue}": [
            ["style", "top", '61px'],
            ["style", "left", '-36px'],
            ["style", "clip", [-36.79998779296875,88,-1.60003662109375,52.800048828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_officeInfo_blue2}": [
            ["style", "clip", [0,273,60,152], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-107px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '197px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid237", tween: [ "style", "${_officeInfo_blue2}", "clip", [0,152,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,273,60,152]}], position: 250, duration: 250 },
            { id: "eid247", tween: [ "style", "${_point_blue}", "top", '24px', { fromValue: '61px'}], position: 0, duration: 210 },
            { id: "eid249", tween: [ "style", "${_point_blue}", "clip", [0,52,35.199951171875,16.800048828125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-36.79998779296875,88,-1.60003662109375,52.800048828125]}], position: 0, duration: 210 },
            { id: "eid238", tween: [ "style", "${_officeInfo_blue2}", "left", '45px', { fromValue: '-107px'}], position: 250, duration: 250 },
            { id: "eid248", tween: [ "style", "${_point_blue}", "left", '0px', { fromValue: '-36px'}], position: 0, duration: 210 }         ]
      }
   }
},
"officeInfo_blue2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','137px','37px','auto','auto'],
      id: 'textBack',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['5px','8px','126px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainText',
      text: 'BULGARIA // 3',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mainText}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '126px'],
            ["style", "left", '5px'],
            ["style", "font-size", '18px']
         ],
         "${_textBack}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "height", '37px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '137px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pointOut_purple2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_purple2',
      type: 'rect',
      rect: ['45px','0','auto','auto','auto','auto']
   },
   {
      id: 'point_purple',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'officeInfo_purple2',
      symbolName: 'officeInfo_purple2'
   },
   {
      id: 'point_purple',
      symbolName: 'point_purple'
   }   ]
   },
   states: {
      "Base State": {
         "${_point_purple}": [
            ["style", "top", '76px'],
            ["style", "left", '-53px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_officeInfo_purple2}": [
            ["style", "left", '-137px'],
            ["style", "clip", [0,363.5999755859375,60,181.5999755859375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '227px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid263", tween: [ "style", "${_officeInfo_purple2}", "clip", [0,182,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,363.5999755859375,60,181.5999755859375]}], position: 250, duration: 250 },
            { id: "eid261", tween: [ "style", "${_point_purple}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid259", tween: [ "style", "${_point_purple}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid260", tween: [ "style", "${_point_purple}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 },
            { id: "eid262", tween: [ "style", "${_officeInfo_purple2}", "left", '45px', { fromValue: '-137px'}], position: 250, duration: 250 }         ]
      }
   }
},
"officeInfo_purple2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','134px','34px','auto','auto'],
      id: 'textBack',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['5px','7px','125px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainText',
      text: 'RUSSIA // 1',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_textBack}": [
            ["color", "background-color", 'rgba(248,152,41,1.00)'],
            ["style", "height", '34px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '134px']
         ],
         "${_mainText}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '125px'],
            ["style", "left", '5px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"footer": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'logo',
      type: 'image',
      rect: ['63px','-39px','266px','87px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/logo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '112px'],
            ["style", "width", '329px']
         ],
         "${_logo}": [
            ["style", "left", '63px'],
            ["style", "top", '-39px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"lowerInfo_red": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(49,197,188,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(49,197,188,0.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '15px'],
            ["style", "width", '569px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"lowerInfo_blue": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(49,197,188,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(221,214,242,0.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid282", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(221,214,242,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(221,214,242,0.00)'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"lowerInfo_green": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(49,197,188,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(49,197,188,0.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '12px'],
            ["style", "width", '569px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"lowerInfo_purple": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(49,197,188,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '15px'],
            ["style", "width", '569px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(49,197,188,0.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"lowerInfo_yellow2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(49,197,188,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy9}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '15px'],
            ["style", "width", '569px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(49,197,188,0.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"lowerInfo_red2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(49,197,188,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(49,197,188,0.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_TextCopy7}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '15px'],
            ["style", "width", '569px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"lowerInfo_blue2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(35,35,35,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(49,197,188,0.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_TextCopy}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '12px'],
            ["style", "width", '569px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid281", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(49,197,188,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(49,197,188,0.00)'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"lowerInfo_green2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(49,197,188,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy3}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '15px'],
            ["style", "width", '569px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(49,197,188,0.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"lowerInfo_purple2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(49,197,188,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(49,197,188,0.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_TextCopy5}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '15px'],
            ["style", "width", '569px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"lowerInfo_blue_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','600px','52px','auto','auto'],
      fill: ['rgba(35,35,35,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(229,229,229,1)','normal','none','normal'],
      type: 'text',
      id: 'Text',
      text: '03.Here goes First Blue Target International Office Decription Informations.',
      align: 'left',
      rect: ['33px','14px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(35,35,35,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_Text}": [
            ["style", "top", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid4", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"officeInfo_blue_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','136px','37px','auto','auto'],
      id: 'textBackCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['5px','7px','125px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainTextCopy2',
      text: 'INDIA // 5',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '137px']
         ],
         "${_mainTextCopy2}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "width", '125px'],
            ["style", "left", '5px'],
            ["style", "font-size", '18px']
         ],
         "${_textBackCopy2}": [
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "height", '37px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"point_blue_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-8px','28px','61px','3px','auto','auto'],
      transform: [[],['-45']],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['38px','0px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'outerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['41px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'innerEllipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(212,237,244,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_outerEllipse}": [
            ["style", "top", '0px'],
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "left", '38px'],
            ["style", "width", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '52px']
         ],
         "${_innerEllipse}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(212,237,244,1)'],
            ["style", "left", '41px'],
            ["style", "width", '7px']
         ],
         "${_Rectangle}": [
            ["style", "top", '28px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '3px'],
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "left", '-8px'],
            ["style", "width", '61px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pointOut_blue_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_blue',
      type: 'rect',
      rect: ['45px','0','auto','auto','auto','auto']
   },
   {
      id: 'point_blue',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'point_blue',
      symbolName: 'point_blue_new'
   },
   {
      id: 'officeInfo_blue',
      symbolName: 'officeInfo_blue_new'
   }   ]
   },
   states: {
      "Base State": {
         "${_officeInfo_blue}": [
            ["style", "left", '-107px'],
            ["style", "clip", [0,273,60,152], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_point_blue}": [
            ["style", "top", '76px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '197px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid117", tween: [ "style", "${_officeInfo_blue}", "left", '45px', { fromValue: '-107px'}], position: 250, duration: 250 },
            { id: "eid127", tween: [ "style", "${_point_blue}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid128", tween: [ "style", "${_point_blue}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid118", tween: [ "style", "${_officeInfo_blue}", "clip", [0,152,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,273,60,152]}], position: 250, duration: 250 },
            { id: "eid129", tween: [ "style", "${_point_blue}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 }         ]
      }
   }
},
"target_blue_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','77px','25px','5px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'shadowEllipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(47,47,47,1.00)']
   },
   {
      rect: ['0px','58px','auto','auto','auto','auto'],
      id: 'animIcon_blue',
      transform: [],
      clip: ['rect(-37px 32px 45px 0px)'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'animIcon_blue',
      symbolName: 'animIcon_blue'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '32px']
         ],
         "${_animIcon_blue}": [
            ["style", "top", '103px'],
            ["style", "opacity", '0'],
            ["style", "clip", [-45,32,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_shadowEllipse}": [
            ["color", "background-color", 'rgba(47,47,47,1.00)'],
            ["style", "top", '77px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 865,
         autoPlay: true,
         timeline: [
            { id: "eid132", tween: [ "style", "${_animIcon_blue}", "clip", [-36.79998779296875,32,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-45,32,0,0]}], position: 0, duration: 305 },
            { id: "eid80", tween: [ "style", "${_shadowEllipse}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 615, easing: "easeOutBounce" },
            { id: "eid131", tween: [ "style", "${_animIcon_blue}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 165, easing: "easeOutBounce" },
            { id: "eid130", tween: [ "style", "${_animIcon_blue}", "top", '35px', { fromValue: '103px'}], position: 0, duration: 305, easing: "easeOutBounce" }         ]
      }
   }
},
"lowerInfo_purple_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','600px','52px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(35,35,35,1.00)']
   },
   {
      rect: ['33px','14px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(229,229,229,1)','normal','none','normal'],
      id: 'Text',
      text: '05.Here goes First Purple Target International Office Decription Informations.',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "overflow", 'hidden'],
            ["color", "background-color", 'rgba(35,35,35,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_Text}": [
            ["style", "top", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"lowerInfo_green_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','600px','52px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(35,35,35,1.00)']
   },
   {
      type: 'text',
      rect: ['33px','14px','auto','auto','auto','auto'],
      id: 'Text',
      text: '04.Here goes First green Target International Office Decription Informations.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(229,229,229,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(35,35,35,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_Text}": [
            ["style", "top", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"lowerInfo_red_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','600px','52px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(35,35,35,1.00)']
   },
   {
      type: 'text',
      rect: ['33px','14px','auto','auto','auto','auto'],
      id: 'Text',
      text: '02.Here goes First Red Target International Office Decription Informations.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(229,229,229,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(35,35,35,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_Text}": [
            ["style", "top", '14px'],
            ["style", "opacity", '0'],
            ["style", "left", '33px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid6", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 }         ]
      }
   }
},
"pointOut_red_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_red',
      type: 'rect',
      rect: ['45px','0','auto','auto','auto','auto']
   },
   {
      id: 'point_red',
      type: 'rect',
      rect: ['auto','24px','auto','auto','145px','auto']
   }],
   symbolInstances: [
   {
      id: 'point_red',
      symbolName: 'point_red_new'
   },
   {
      id: 'officeInfo_red',
      symbolName: 'officeInfo_red_new'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '197px']
         ],
         "${_point_red}": [
            ["style", "top", '76px'],
            ["style", "right", '198px'],
            ["style", "left", 'auto'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_officeInfo_red}": [
            ["style", "left", '-107px'],
            ["style", "clip", [0,273,60,152], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid113", tween: [ "style", "${_officeInfo_red}", "clip", [0,152,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,273,60,152]}], position: 250, duration: 250 },
            { id: "eid27", tween: [ "style", "${_point_red}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid112", tween: [ "style", "${_officeInfo_red}", "left", '45px', { fromValue: '-107px'}], position: 250, duration: 250 },
            { id: "eid25", tween: [ "style", "${_point_red}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid29", tween: [ "style", "${_point_red}", "right", '145px', { fromValue: '198px'}], position: 0, duration: 210 }         ]
      }
   }
},
"officeInfo_red_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','152px','37px','auto','auto'],
      id: 'textBackCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['5px','7px','141px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainTextCopy5',
      text: 'PHILIPPINES // 1',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_textBackCopy5}": [
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "height", '37px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '152px']
         ],
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '152px']
         ],
         "${_mainTextCopy5}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "width", '141px'],
            ["style", "left", '5px'],
            ["style", "font-size", '18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"point_red_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-8px','28px','61px','3px','auto','auto'],
      transform: [[],['-45']],
      id: 'RectangleCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['38px','0px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'outerEllipseCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['41px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'innerEllipseCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(212,237,244,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_innerEllipseCopy3}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(212,237,244,1)'],
            ["style", "left", '41px'],
            ["style", "width", '7px']
         ],
         "${_outerEllipseCopy3}": [
            ["style", "top", '0px'],
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "left", '38px'],
            ["style", "width", '14px']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '28px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '3px'],
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "left", '-8px'],
            ["style", "width", '61px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '52px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pointOut_green_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_green',
      type: 'rect',
      rect: ['45','0','auto','auto','auto','auto']
   },
   {
      id: 'point_green',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'officeInfo_green',
      symbolName: 'officeInfo_green_new'
   },
   {
      id: 'point_green',
      symbolName: 'point_green_new'
   }   ]
   },
   states: {
      "Base State": {
         "${_point_green}": [
            ["style", "top", '76px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '197px']
         ],
         "${_officeInfo_green}": [
            ["style", "clip", [0,273,60,152], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-107px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid139", tween: [ "style", "${_point_green}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid141", tween: [ "style", "${_point_green}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 },
            { id: "eid142", tween: [ "style", "${_officeInfo_green}", "clip", [0,152,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,273,60,152]}], position: 250, duration: 250 },
            { id: "eid140", tween: [ "style", "${_point_green}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid143", tween: [ "style", "${_officeInfo_green}", "left", '45px', { fromValue: '-107px'}], position: 250, duration: 250 }         ]
      }
   }
},
"point_green_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-8px','28px','61px','3px','auto','auto'],
      transform: [[],['-45']],
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['38px','0px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'outerEllipseCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['41px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'innerEllipseCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(212,237,244,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '52px']
         ],
         "${_outerEllipseCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "left", '38px'],
            ["style", "width", '14px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '28px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '3px'],
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "left", '-8px'],
            ["style", "width", '61px']
         ],
         "${_innerEllipseCopy}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(212,237,244,1)'],
            ["style", "left", '41px'],
            ["style", "width", '7px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"officeInfo_green_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','136px','37px','auto','auto'],
      id: 'textBackCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['7px','7px','124px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainTextCopy3',
      text: 'KENYA // 1',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_textBackCopy3}": [
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "height", '37px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '136px']
         ],
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '137px']
         ],
         "${_mainTextCopy3}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "width", '124px'],
            ["style", "left", '7px'],
            ["style", "font-size", '18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pointOut_purple_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'officeInfo_purple',
      type: 'rect',
      rect: ['45','0','auto','auto','auto','auto']
   },
   {
      id: 'point_purple',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'officeInfo_purple',
      symbolName: 'officeInfo_purple_new'
   },
   {
      id: 'point_purple',
      symbolName: 'point_purple_new'
   }   ]
   },
   states: {
      "Base State": {
         "${_officeInfo_purple}": [
            ["style", "clip", [0,273,60,152], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-107px']
         ],
         "${_point_purple}": [
            ["style", "top", '76px'],
            ["style", "clip", [-52,104,0,52], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '197px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid151", tween: [ "style", "${_officeInfo_purple}", "clip", [0,152,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,273,60,152]}], position: 250, duration: 250 },
            { id: "eid154", tween: [ "style", "${_point_purple}", "clip", [0,52,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-52,104,0,52]}], position: 0, duration: 210 },
            { id: "eid153", tween: [ "style", "${_point_purple}", "top", '24px', { fromValue: '76px'}], position: 0, duration: 210 },
            { id: "eid155", tween: [ "style", "${_point_purple}", "left", '0px', { fromValue: '-53px'}], position: 0, duration: 210 },
            { id: "eid152", tween: [ "style", "${_officeInfo_purple}", "left", '45px', { fromValue: '-107px'}], position: 250, duration: 250 }         ]
      }
   }
},
"officeInfo_purple_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','136px','37px','auto','auto'],
      id: 'textBackCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['7px','7px','124px','24px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',20,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'mainTextCopy4',
      text: 'CHINA // 2',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mainTextCopy4}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["style", "height", '24px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "width", '124px'],
            ["style", "left", '7px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '137px']
         ],
         "${_textBackCopy4}": [
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "height", '37px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"point_purple_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-8px','28px','61px','3px','auto','auto'],
      transform: [[],['-45']],
      id: 'RectangleCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['38px','0px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'outerEllipseCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(248,152,41,1.00)']
   },
   {
      rect: ['41px','3px','7px','7px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'innerEllipseCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(212,237,244,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_outerEllipseCopy2}": [
            ["style", "top", '0px'],
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "left", '38px'],
            ["style", "width", '14px']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '28px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '3px'],
            ["color", "background-color", 'rgba(248,152,41,1)'],
            ["style", "left", '-8px'],
            ["style", "width", '61px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '52px']
         ],
         "${_innerEllipseCopy2}": [
            ["style", "top", '3px'],
            ["style", "height", '7px'],
            ["color", "background-color", 'rgba(212,237,244,1)'],
            ["style", "left", '41px'],
            ["style", "width", '7px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"target_red_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','77px','25px','5px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'shadowEllipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(47,47,47,1.00)']
   },
   {
      id: 'animIcon_red',
      type: 'rect',
      clip: ['rect(45px 32px -37px 0px)'],
      rect: ['0px','58px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'animIcon_red',
      symbolName: 'animIcon_red_new'
   }   ]
   },
   states: {
      "Base State": {
         "${_animIcon_red}": [
            ["style", "top", '103px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "clip", [-45,32,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '32px']
         ],
         "${_shadowEllipse}": [
            ["color", "background-color", 'rgba(47,47,47,1.00)'],
            ["style", "top", '77px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 865,
         autoPlay: true,
         timeline: [
            { id: "eid80", tween: [ "style", "${_shadowEllipse}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 615, easing: "easeOutBounce" },
            { id: "eid116", tween: [ "style", "${_animIcon_red}", "clip", [-36.79998779296875,32,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-45,32,0,0]}], position: 0, duration: 305 },
            { id: "eid115", tween: [ "style", "${_animIcon_red}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 165, easing: "easeOutBounce" },
            { id: "eid114", tween: [ "style", "${_animIcon_red}", "top", '35px', { fromValue: '103px'}], position: 0, duration: 305, easing: "easeOutBounce" }         ]
      }
   }
},
"animIcon_red_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'icon_yellowCopy4',
      type: 'image',
      rect: ['0px','0px','32px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/icon_green.png','0px','0px']
   },
   {
      id: 'circle_yellowCopy4',
      type: 'image',
      rect: ['5px','6px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/circle_green.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_icon_yellowCopy4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_circle_yellowCopy4}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid305", tween: [ "transform", "${_circle_yellowCopy4}", "scaleX", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid306", tween: [ "style", "${_circle_yellowCopy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid307", tween: [ "transform", "${_circle_yellowCopy4}", "scaleY", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" }         ]
      }
   }
},
"target_green_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','77px','25px','5px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'shadowEllipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(47,47,47,1.00)']
   },
   {
      id: 'animIcon_green',
      type: 'rect',
      clip: ['rect(-36.800018310546875px 32px 45px 0px)'],
      rect: ['0','35','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'animIcon_green',
      symbolName: 'animIcon_green_new'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '32px']
         ],
         "${_animIcon_green}": [
            ["style", "top", '103px'],
            ["style", "opacity", '0'],
            ["style", "clip", [-45,32,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_shadowEllipse}": [
            ["color", "background-color", 'rgba(47,47,47,1.00)'],
            ["style", "top", '77px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 865,
         autoPlay: true,
         timeline: [
            { id: "eid145", tween: [ "style", "${_animIcon_green}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 165, easing: "easeOutBounce" },
            { id: "eid80", tween: [ "style", "${_shadowEllipse}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 615, easing: "easeOutBounce" },
            { id: "eid146", tween: [ "style", "${_animIcon_green}", "clip", [-36.79998779296875,32,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-45,32,0,0]}], position: 0, duration: 305 },
            { id: "eid144", tween: [ "style", "${_animIcon_green}", "top", '35px', { fromValue: '103px'}], position: 0, duration: 305, easing: "easeOutBounce" }         ]
      }
   }
},
"animIcon_green_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'icon_yellow',
      type: 'image',
      rect: ['0px','0px','32px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/icon_green2.png','0px','0px']
   },
   {
      id: 'circle_yellow',
      type: 'image',
      rect: ['5px','6px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/circle_green2.png','0px','0px']
   },
   {
      id: 'icon_yellowCopy',
      type: 'image',
      rect: ['0px','0px','32px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/icon_green.png','0px','0px']
   },
   {
      id: 'circle_yellowCopy',
      type: 'image',
      rect: ['5px','6px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/circle_green.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_circle_yellow}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${_icon_yellow}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '32px']
         ],
         "${_circle_yellowCopy}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${_icon_yellowCopy}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid76", tween: [ "transform", "${_circle_yellow}", "scaleY", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid301", tween: [ "transform", "${_circle_yellowCopy}", "scaleY", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid68", tween: [ "style", "${_circle_yellow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid300", tween: [ "style", "${_circle_yellowCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid299", tween: [ "transform", "${_circle_yellowCopy}", "scaleX", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "transform", "${_circle_yellow}", "scaleX", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" }         ]
      }
   }
},
"target_purple_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['3px','77px','25px','5px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'shadowEllipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(47,47,47,1.00)']
   },
   {
      id: 'animIcon_purple',
      type: 'rect',
      clip: ['rect(-37px 32px 45px 0px)'],
      rect: ['0','35px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'animIcon_purple',
      symbolName: 'animIcon_purple_new'
   }   ]
   },
   states: {
      "Base State": {
         "${_animIcon_purple}": [
            ["style", "top", '103px'],
            ["style", "opacity", '0'],
            ["style", "clip", [-45,32,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '82px'],
            ["style", "width", '32px']
         ],
         "${_shadowEllipse}": [
            ["color", "background-color", 'rgba(47,47,47,1.00)'],
            ["style", "top", '77px'],
            ["style", "opacity", '0'],
            ["style", "left", '3px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 865,
         autoPlay: true,
         timeline: [
            { id: "eid150", tween: [ "style", "${_animIcon_purple}", "clip", [-36.79998779296875,32,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-45,32,0,0]}], position: 0, duration: 305 },
            { id: "eid80", tween: [ "style", "${_shadowEllipse}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 615, easing: "easeOutBounce" },
            { id: "eid148", tween: [ "style", "${_animIcon_purple}", "top", '35px', { fromValue: '103px'}], position: 0, duration: 305, easing: "easeOutBounce" },
            { id: "eid149", tween: [ "style", "${_animIcon_purple}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 165, easing: "easeOutBounce" }         ]
      }
   }
},
"animIcon_purple_new": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'icon_yellowCopy3',
      type: 'image',
      rect: ['0px','0px','32px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/icon_green.png','0px','0px']
   },
   {
      id: 'circle_yellowCopy3',
      type: 'image',
      rect: ['5px','6px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/circle_green.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_icon_yellowCopy3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_circle_yellowCopy3}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid302", tween: [ "transform", "${_circle_yellowCopy3}", "scaleX", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid303", tween: [ "style", "${_circle_yellowCopy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid304", tween: [ "transform", "${_circle_yellowCopy3}", "scaleY", '1.02', { fromValue: '0.8'}], position: 0, duration: 1000, easing: "easeOutQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-772499272");
