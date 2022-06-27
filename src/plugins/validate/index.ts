import * as veeValidate from "vee-validate";
import rules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import yup from './yup';

veeValidate.configure({
    generateMessage: localize('zh-CN', zh_CN),
    // validateOnInput: true,
});

Object.keys(rules).forEach((rule) => {
    veeValidate.defineRule(rule, rules[rule]);
});

export default {
    yup, ...veeValidate,
}