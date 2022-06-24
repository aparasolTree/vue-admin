import veeValidate from "vee-validate";
import rules from '@vee-validate/rules';
import { loadLocaleFromURL, localize } from '@vee-validate/i18n';
import yup from './yup';

loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@last/dist/locale/zh_CN.json');

veeValidate.configure({
    generateMessage: localize('zh-CN'),
});

Object.keys(rules).forEach((rule) => {
    veeValidate.defineRule(rule, rules[rule]);
});

export default {
    yup, ...veeValidate,
}