import Login from './components/login/index'
import Account from './components/account/index'
import Allocation from './components/allocation/index'
import Foundation from './components/foundation/index'
import Position from './components/position/index'
import Release from './components/release/index'
import Business from './components/business/index'
import ModifyInfoHome from './components/modifyinfo/index'
import ModifyInfo from './components/modifyinfo/info'
import ModifySecondContact from './components/modifyinfo/secondcontact'
import ModifyPwd from './components/modifypwd/index'
import Risk from './components/risk/index'
import RiskInfo from './components/risk/info'
import RiskLevel from './components/risk/level'
import Questionnaire from './components/questionnaire/index'
import NewStock from './components/newstock/index'
import NewStockRisk from './components/newstock/nsrsk'
import NewStockHistory from './components/newstock/nshis'
import NewStockSuccess from './components/newstock/nssuc'
import NotFound from './components/notfound/index'
import Survey from './components/survey/index'

const routes = [
{
	path: '/login',
	name: '账户绑定',
	component: Login,
	alias: '/hxkf/login'
},
{
	path: '/account',
	name: '账户管家',
	component: Account,
	alias:'/hxkf/account'
	},
	{
	path: '/allocation',
	name: '新股中签',
	component: Allocation,
	alias:'/hxkf/allocation'
},
{
	path: '/foundation',
	name: '理财基金',
	component: Foundation,
	alias:'/hxkf/foundation'
},
{
	path: '/position',
	name: '我的持仓',
	component: Position,
	alias:'/hxkf/position'
},
{
	path: '/release',
	name: '解除绑定',
	component: Release,
	alias:'/hxkf/release'
},
{
	path: '/business',
	name: '业务办理',
	component: Business,
	alias:'/hxkf/business'
},
{
	path: '/modifyinfohome',
	name: '资料修改主页',
	component: ModifyInfoHome,
	alias:'/hxkf/modifyinfohome'
},
{
	path: '/modifyinfo',
	name: '资料修改',
	component: ModifyInfo,
	alias:'/hxkf/modifyinfo'
},
{
	path: '/secondcontact',
	name: '修改第二联系人信息',
	component: ModifySecondContact,
	alias:'/hxkf/secondcontact'
},
{
	path: '/modifypwd',
	name: '密码修改',
	component: ModifyPwd,
	alias:'/hxkf/modifypwd'
},
{
	path: '/questionnaire',
	name: '问卷回访',
	component: Questionnaire,
	alias:'/hxkf/questionnaire'
},
{
	path: '/risk',
	name: '风险测评结果',
	component: Risk,
	alias:'/hxkf/risk'
},
{
	path: '/riskinfo',
	name: '风险测评题目',
	component: RiskInfo,
	alias:'/hxkf/riskinfo'
},
{
	path: '/risklevel',
	name: '风险测评等级',
	component: RiskLevel,
	alias:'/hxkf/risklevel'
},
{
	path: '/newstock',
	name: '新股申购查询',
	component: NewStock,
	alias:'/hxkf/newstock'
},
{
	path: '/newstockrisk',
	name: '新股申购风险',
	component: NewStockRisk,
	alias:'/hxkf/newstockrisk'
},
{
	path: '/newstockhistory',
	name: '新股申购历史',
	component: NewStockHistory,
	alias:'/hxkf/newstockhistory'
},
{
	path: '/newstocksuccess',
	name: '新股申购成功',
	component: NewStockSuccess,
	alias:'/hxkf/newstocksuccess'
},
{
	path: '/survey',
	name: '满意度调查',
	component: Survey,
	alias:'/hxkf/survey'
},
{
	path: '*',
	name: '找不到...',
	component: NotFound
},
	
];

module.exports = {
	routes: routes
}