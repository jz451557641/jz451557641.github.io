// MULTIPLE * DEFAULT_NUM = 3600

// s的倍数，现在时间点，在那一个区间
var MULTIPLE = 36;

// 将1个小时切成几份
var DEFAULT_NUM = 100;

// 12 个小时 存放颜色的数组
var color_arr = {};

// 刻度颜色对应字典
var Scale_color_dict = {
	'1': [9.5, 10.5],
	'2': [10.5, 11.5],
	'3': [11.5, 0.5],
	'4': [0.5, 1.5],
	'5': [1.5, 2.5],
	'6': [2.5, 3.5],
	'7': [3.5, 4.5],
	'8': [4.5, 5.5],
	'9': [5.5, 6.5],
	'10': [6.5, 7.5],
	'11': [7.5, 8.5],
	'12': [8.5, 9.5]
}

// 是否展示事件刻度
var SHOW_TIME_NUMBER = true;

// 是否让时钟展示现在的颜色
var SHOW_COLOR_DIAL = false;

// 是否展示指针

var SHOW_TIME_LINE = false;

