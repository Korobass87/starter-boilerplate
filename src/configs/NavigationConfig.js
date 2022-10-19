import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  GiftOutlined,
  PictureOutlined,
  ShopOutlined,
  TeamOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/base`,
  title: 'sidenav.main',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
      {
    key: 'dashboard',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'sidenav.main.dashboard',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/base/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'products',
          path: `${APP_PREFIX_PATH}/base/catalog/products`,
          title: 'sidenav.main.catalog.products',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'category',
          path: `${APP_PREFIX_PATH}/base/catalog/category`,
          title: 'sidenav.main.catalog.category',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'collection',
          path: `${APP_PREFIX_PATH}/base/catalog/collection`,
          title: 'sidenav.main.catalog.collection',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'combo',
          path: `${APP_PREFIX_PATH}/base/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        }]
},
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/base/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/base/clients`,
      title: 'sidenav.main.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'client-list',
          path: `${APP_PREFIX_PATH}/base/clients/list`,
          title: 'sidenav.main.clients.list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'client-group',
          path: `${APP_PREFIX_PATH}/base/clients/group`,
          title: 'sidenav.main.clients.group',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/base/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },{
      key: 'Promo',
      path: `${APP_PREFIX_PATH}/base/promo`,
      title: 'sidenav.main.promo',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'Offline-stores',
      path: `${APP_PREFIX_PATH}/base/offline`,
      title: 'sidenav.main.offline',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [{
        key: 'address-store',
        path: `${APP_PREFIX_PATH}/base/offline/address`,
        title: 'sidenav.main.offline.address',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
        {
          key: 'Geofence',
          path: `${APP_PREFIX_PATH}/base/offline/geofence`,
          title: 'sidenav.main.offline.geofence',
          icon: '',
          breadcrumb: false,
          submenu: []
        }]
    },
    {
      key: 'employees',
      path: `${APP_PREFIX_PATH}/base/employees`,
      title: 'sidenav.main.employees',
      icon: TeamOutlined ,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mailing',
      path: `${APP_PREFIX_PATH}/base/mailing`,
      title: 'sidenav.main.mailing',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
},
]

const systemNavTree=[
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.system',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'sidenav.system.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      }, {
        key: 'mobile-app',
        path: `${APP_PREFIX_PATH}/system/mobile-app`,
        title: 'sidenav.system.mobile-app',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      }, {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'sidenav.system.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]}
]


const navigationConfig = [
  ...mainNavTree,
    ...systemNavTree
]

export default navigationConfig;
