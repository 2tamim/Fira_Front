// routes
import { PATH_DASHBOARD, PATH_PAGE } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/kara/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  karha: getIcon('ic_karha'),
  darkhast: getIcon('ic_darkhast'),
  karkard: getIcon('ic_karkard'),
  amalkard: getIcon('ic_amalkard'),
  manabe: getIcon('ic_manabe'),
  ghavanin: getIcon('ic_ghavanin'),
  setting: getIcon('ic_setting'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    // subheader: 'کاربران',
    items: [
      // { title: 'داشبورد', path: PATH_PAGE.maintenance, icon: ICONS.dashboard },
      { title: 'داشبورد', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      { title: 'کانبان', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban },
      { title: 'درخواست', path: PATH_DASHBOARD.invoice.list , icon: ICONS.darkhast},
      // { title: 'کارکرد', path: PATH_PAGE.maintenance, icon: ICONS.karkard },
      { title: 'کارکرد', path: PATH_DASHBOARD.chat.root, icon: ICONS.karkard },
      // { title: 'داشبورد', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      // { title: 'کانبان', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban },
      // { title: 'گزارش کار', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
      // { title: 'درخواست', path: PATH_DASHBOARD.user.list },
      // { title: 'کارکرد', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      // { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
      // { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    // subheader: 'مدیران',
    items: [
      { title: 'عملکرد حرفه ای', path: PATH_PAGE.maintenance, icon: ICONS.amalkard },
      { title: 'منابع تخصیص شده', path: PATH_PAGE.maintenance, icon: ICONS.manabe },
      { title: 'گزارش جامع', path: PATH_PAGE.maintenance, icon: ICONS.karha },
      // // USER
      // {
      //   title: 'user',
      //   path: PATH_DASHBOARD.user.root,
      //   icon: ICONS.user,
      //   children: [
      //     { title: 'profile', path: PATH_DASHBOARD.user.profile },
      //     { title: 'cards', path: PATH_DASHBOARD.user.cards },
      //     { title: 'create', path: PATH_DASHBOARD.user.new },
      //     { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
      //     { title: 'account', path: PATH_DASHBOARD.user.account },
      //   ],
      // },

      // // E-COMMERCE
      // {
      //   title: 'e-commerce',
      //   path: PATH_DASHBOARD.eCommerce.root,
      //   icon: ICONS.cart,
      //   children: [
      //     { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
      //     { title: 'product', path: PATH_DASHBOARD.eCommerce.demoView },
      //     { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
      //     { title: 'create', path: PATH_DASHBOARD.eCommerce.new },
      //     { title: 'edit', path: PATH_DASHBOARD.eCommerce.demoEdit },
      //     { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
      //   ],
      // },

      // // INVOICE
      // {
      //   title: 'invoice',
      //   path: PATH_DASHBOARD.invoice.root,
      //   icon: ICONS.invoice,
      //   children: [
      //     { title: 'list', path: PATH_DASHBOARD.invoice.list },
      //     { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
      //     { title: 'create', path: PATH_DASHBOARD.invoice.new },
      //     { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit },
      //   ],
      // },

      // // BLOG
      // {
      //   title: 'blog',
      //   path: PATH_DASHBOARD.blog.root,
      //   icon: ICONS.blog,
      //   children: [
      //     { title: 'posts', path: PATH_DASHBOARD.blog.posts },
      //     { title: 'post', path: PATH_DASHBOARD.blog.demoView },
      //     { title: 'create', path: PATH_DASHBOARD.blog.new },
      //   ],
      // },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
  {
    // subheader: 'تنظیمات',
    items: [
      { title: "قوانین و مقررات", path: PATH_DASHBOARD.user.account, icon: ICONS.ghavanin },
      // { title: "تنظیمات", path: '#', icon: ICONS.setting },
      // {
      //   title: 'mail',
      //   path: PATH_DASHBOARD.mail.root,
      //   icon: ICONS.mail,
      //   info: (
      //     <Label variant="outlined" color="error">
      //       +32
      //     </Label>
      //   ),
      // },
      // { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
      // { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
    ],
  },
];

export default navConfig;
