const staticData = {}

function getData(originData) {
	var d = [];
	for (var i = 0; i < originData.length; i++) {
		d.push(originData[i].value);
	}
	return d;
}

function getIndex(originData, value) {
	var idx;
	for (var i = 0; i < originData.length; i++) {
		(value === originData[i].value) && (idx = i)
	}
	return idx;
}

function getKey(originData, value) {
	var idx;
	for (var i = 0; i < originData.length; i++) {
		(value === originData[i].value) && (idx = originData[i].key)
	}
	return idx;
}

function getValue(originData, key) {
	var v;
	for (var i = 0; i < originData.length; i++) {
		(key === originData[i].key) && (v = originData[i].value)
	}
	return v;
}

staticData.Profession = {
	originData: [{
		key: '01',
		value: '文教科卫专业人员'
	}, {
		key: '02',
		value: '党政（在职，离退休）机关干部'
	}, {
		key: '03',
		value: '企事业单位干部'
	}, {
		key: '04',
		value: '行政企事业单位工人'
	}, {
		key: '05',
		value: '农民'
	}, {
		key: '06',
		value: '个体'
	}, {
		key: '07',
		value: '无业'
	}, {
		key: '08',
		value: '军人'
	}, {
		key: '09',
		value: '学生'
	}, {
		key: '0A',
		value: '自由职业者'
	}, {
		key: '10',
		value: '证券从业人员'
	}, {
		key: '11',
		value: '离退休'
	}, {
		key: '99',
		value: '其他'
	}],
	getData: function() {
		return getData(this.originData);
	},
	getIndex: function(value) {
		return getIndex(this.originData, value);
	},
	getKey: function(value) {
		return getKey(this.originData, value);
	},
	getValue: function(key) {
		return getValue(this.originData, key);
	}
}
staticData.Education = {
	originData: [{
		key: '0',
		value: '博士'
	}, {
		key: '1',
		value: '硕士'
	}, {
		key: '2',
		value: '本科'
	}, {
		key: '3',
		value: '大专'
	}, {
		key: '4',
		value: '中专'
	}, {
		key: '5',
		value: '高中'
	}, {
		key: '6',
		value: '初中以下'
	}, {
		key: 'Z',
		value: '其他'
	}],
	getData: function() {
		return getData(this.originData);
	},
	getIndex: function(value) {
		return getIndex(this.originData, value);
	},
	getKey: function(value) {
		return getKey(this.originData, value);
	},
	getValue: function(key) {
		return getValue(this.originData, key);
	}
}
staticData.Contactway = {
	originData: [{
		key: '1',
		value: '手机'
	}, {
		key: '2',
		value: '家庭电话'
	}, {
		key: '3',
		value: '工作电话'
	}, {
		key: '4',
		value: '小灵通'
	}],
	getData: function() {
		return getData(this.originData);
	},
	getIndex: function(value) {
		return getIndex(this.originData, value);
	},
	getKey: function(value) {
		return getKey(this.originData, value);
	},
	getValue: function(key) {
		return getValue(this.originData, key);
	}
}
staticData.Contactfreq = {
    originData: [{
        key: '0',
        value: '可随意联络'
    }, {
        key: '1',
        value: '不超过1月3次'
    }, {
        key: '2',
        value: '不超过1季度1次'
    }, {
        key: '3',
        value: '不超过1年1次'
    }],
    getData: function () {
        return getData(this.originData);
    },
    getIndex: function (value) {
        return getIndex(this.originData, value);
    },
    getKey: function (value) {
        return getKey(this.originData, value);
    },
    getValue: function (key) {
        return getValue(this.originData, key);
    }
}
staticData.myddcQuestions = {
		data:[
    {
        'type': 'radio',
        'name': 'a1',
        'title': '1、您对公司为投资者提供的证券投资委托方式（如网上委托、网上营业厅委托、95584电话委托、手机委托、柜台委托等）是否了解',
        'checkItem': [
            'A、非常清楚',
            'B、了解',
            'C、不太清楚',
            'D、不清楚'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D'
        ]
    },
    {
        'type': 'radio',
        'name': 'a2',
        'title': '2、您对公司网上委托交易软件的综合评价',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a3',
        'title': '3、您对华西官网的综合评价',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'checkbox',
        'name': 'a4',
        'title': '4、您主要使用华西官网的什么功能？（多选）',
        'checkItem': [
            'A、软件下载',
            'B、网上营业厅',
            'C、网上开户',
            'D、网上预登记',
            'E、证券投资咨询服务'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a5',
        'title': '5、您是从什么渠道下载到公司手机委托交易客户端？',
        'checkItem': [
            'A、公司官网',
            'B、应用市场',
            'C、理财经理',
            'D、公司其他产品',
            'E、其他'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'checkbox',
        'name': 'a6',
        'title': '6、您认为公司手机委托交易客户端哪些需要改善？（多选）',
        'checkItem': [
            'A、反应速度',
            'B、稳定性能',
            'C、界面外观',
            'D、提供更多金融产品'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D'
        ]
    },
    {
        'type': 'radio',
        'name': 'a7',
        'title': '7、您对理财专家（快捷版）的综合评价',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意',
            'F、未使用，不了解'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F'
        ]
    },
    {
        'type': 'radio',
        'name': 'a8',
        'title': '8、您对理财专家(专业版）的最大的期待是什么？',
        'checkItem': [
            'A、多元化的产品',
            'B、便捷的操作',
            'C、安全的账户体系',
            'D、专业的咨询服务',
            'E、快速的申购、赎回方式'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a9',
        'title': '9、您对公司手机委托交易客户端的综合评价',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a10',
        'title': '10、您对95584电话委托语音流程的便捷性感到满意吗？',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a11',
        'title': '11、您对95584人工服务解决问题的能力感到满意吗？',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'checkbox',
        'name': 'a12',
        'title': '12、当您有问题想咨询时，希望通过哪种渠道获取服务？（多选）',
        'checkItem': [
            'A、95584人工服务',
            'B、微信客户端',
            'C、华西官网常见问题解答'
        ],
        'selections': [
            'A',
            'B',
            'C'
        ]
    },
    {
        'type': 'radio',
        'name': 'a13',
        'title': '13、公司处理投诉的态度和方式您感到满意吗？',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a14',
        'title': '14、您对公司理财经理及证券经纪人服务内容是否了解',
        'checkItem': [
            'A、非常清楚',
            'B、了解',
            'C、不太清楚',
            'D、不清楚'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D'
        ]
    },
    {
        'type': 'radio',
        'name': 'a15',
        'title': '15、您对公司理财经理及证券经纪人服务的综合评价',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'checkbox',
        'name': 'a16',
        'title': '16、您认为公司理财经理及证券经纪人服务有哪些方面需要改进？（多选）',
        'checkItem': [
            'A、服务态度',
            'B、服务内容',
            'C、服务专业性',
            'D、服务及时性'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D'
        ]
    },
    {
        'type': 'radio',
        'name': 'a17',
        'title': '17、您对公司投资顾问服务频率感到满意吗？',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a18',
        'title': '18、您对公司投资顾问服务的综合评价',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'checkbox',
        'name': 'a19',
        'title': '19、您认为投资顾问的服务有哪些方面需要改进？（多选）',
        'checkItem': [
            'A、股票咨询',
            'B、理财产品咨询',
            'C、服务态度',
            'D、服务专业性',
            'E、服务及时性'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a20',
        'title': '20、您对公司代销证券投资基金或金融产品服务感到满意吗？',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a21',
        'title': '21、您对公司资管理财产品的综合评价',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a22',
        'title': '22、您对公司咨询服务产品的综合评价',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'checkbox',
        'name': 'a23',
        'title': '23、您认为公司的咨询服务产品哪些方面需要改进？（多选）',
        'checkItem': [
            'A、精准高效',
            'B、通俗易懂',
            'C、个股分析',
            'D、大盘研判',
            'E、实战技巧'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'checkbox',
        'name': 'a24',
        'title': '24、您更希望通过哪种渠道接收产品信息？（多选）',
        'checkItem': [
            'A、短信',
            'B、交易软件',
            'C、微信客户端',
            'D、电话',
            'E、手机APP',
            'F、公司网站'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F'
        ]
    },
    {
        'type': 'checkbox',
        'name': 'a25',
        'title': '25、您更希望通过以下哪种方式了解新的投资工具？（多选）',
        'checkItem': [
            'A、电话',
            'B、现场培训',
            'C、公司网站',
            'D、交易软件',
            'E、微信客户端'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'checkbox',
        'name': 'a26',
        'title': '26、您对投资报告会的哪些方面比较感兴趣？（多选）',
        'checkItem': [
            'A、技术分析',
            'B、业深度分析',
            'C、国家宏观政策讲解',
            'D、其它'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D'
        ]
    },
    {
        'type': 'radio',
        'name': 'a27',
        'title': '27、您对公司开展的投资者教育工作感到满意吗？',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'checkbox',
        'name': 'a28',
        'title': '28、您希望通过哪种方式接受投资者教育信息？（多选）',
        'checkItem': [
            'A、现场培训',
            'B、公司网站',
            'C、95584电话',
            'D、微信客户端',
            'E、短信'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'radio',
        'name': 'a29',
        'title': '29、您对开户营业部服务的综合评价',
        'checkItem': [
            'A、非常满意',
            'B、比较满意',
            'C、一般',
            'D、不太满意',
            'E、不满意'
        ],
        'selections': [
            'A',
            'B',
            'C',
            'D',
            'E'
        ]
    },
    {
        'type': 'textarea',
        'name': 'a30',
        'title': '30、如果您对本公司有任何建议，欢迎您写在下列方框中。',
        'checkItem': [
        ]
    }]

}

export default staticData