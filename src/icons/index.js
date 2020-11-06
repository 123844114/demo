/*
 * @Author: 草莓堂主-张肖伟
 * @Date: 2020-11-06 14:40:27
 * @Descripttion: 
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component
import './iconfont.js'
// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
