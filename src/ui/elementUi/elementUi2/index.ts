import { getLocale } from '@vscode-use/utils'
import { componentsReducer, propsReducer } from '../../utils'
import SaRow from './row.json'
import SaCalendar from './calendar.json'
import SaCol from './col.json'
import SaAlert from './alert.json'
import SaButton from './button.json'
import SaButtonGroup from './buttonGroup.json'
import SaContainer from './container.json'
import SaHeader from './header.json'
import SaAside from './aside.json'
import SaFooter from './footer.json'
import SaLink from './link.json'
import SaRadio from './radio.json'
import SaRadioGroup from './radioGroup.json'
import SaRadioButton from './radioButton.json'
import SaForm from './form.json'
import SaFormItem from './formItem.json'
import SaTable from './table.json'
import SaTableColumn from './tableColumn.json'
import SaCard from './card.json'
import SaInput from './input.json'
import SaInputNumber from './inputNumber.json'
import SaAutocomplete from './autocomplete.json'
import SaSelect from './select.json'
import SaCascader from './cascader.json'
import SaCascaderPanel from './cascaderPanel.json'
import SaCheckbox from './checkbox.json'
import SaCheckboxGroup from './checkboxGroup.json'
import SaCheckboxButton from './checkboxButton.json'
import SaBadge from './badge.json'
import SaBreadcrumb from './breadcrumb.json'
import SaCarousel from './carousel.json'
import SaCarouselItem from './carouselItem.json'
import SaCollapse from './collapse.json'
import SaCollapseItem from './collapseItem.json'
import SaColorPicker from './colorPicker.json'
import SaImage from './image.json'
import SaEmpty from './empty.json'
import SaDropdown from './dropdown.json'
import SaDropdownMenu from './dropdownMenu.json'
import SaDropdownItem from './dropdownItem.json'
import SaDrawer from './drawer.json'
import SaDivider from './divider.json'
import SaDialog from './dialog.json'
import SaDescriptions from './descriptions.json'
import SaDescriptionItem from './descriptionItem.json'
import SaDatePicker from './datePicker.json'
import SaDatetimePicker from './datetimePicker.json'
import SaMain from './main.json'
import SaMenu from './menu.json'
import SaMenuItem from './menuItem.json'
import SaPageHeader from './pageHeader.json'
import SaPagination from './pagination.json'
import SaPopconfirm from './popconfirm.json'
import SaPopover from './popover.json'
import SaProgress from './progress.json'
import SaRate from './rate.json'
import SaResult from './result.json'
import SaSkeleton from './skeleton.json'
import SaSkeletonItem from './skeletonItem.json'
import SaSlider from './slider.json'
import SaStatistic from './statistic.json'
import SaStep from './step.json'
import SaSteps from './steps.json'
import SaSubmenu from './submenu.json'
import SaSwitch from './switch.json'
import SaTabPane from './tabPane.json'
import SaTabs from './tabs.json'
import SaTag from './tag.json'
import SaTimeline from './timeline.json'
import SaTimelineItem from './timelineItem.json'
import SaTimePicker from './timePicker.json'
import SaTimeSelect from './timeSelect.json'
import SaTooltip from './tooltip.json'
import SaTransfer from './transfer.json'
import SaTree from './tree.json'
import SaUpload from './upload.json'
import SaAvatar from './avatar.json'
import SaBacktop from './backtop.json'
import SaOption from './option.json'
import SaOptionGroup from './optionGroup.json'

export function elementUi2(extensionContext: any) {
  const map: any = [
    SaRow,
    SaCol,
    SaCalendar,
    SaAlert,
    SaButton,
    SaButtonGroup,
    SaContainer,
    SaHeader,
    SaAside,
    SaFooter,
    SaLink,
    SaRadio,
    SaRadioGroup,
    SaRadioButton,
    SaForm,
    SaFormItem,
    SaTable,
    SaTableColumn,
    SaCard,
    SaInput,
    SaInputNumber,
    SaAutocomplete,
    SaSelect,
    SaCascader,
    SaCascaderPanel,
    SaCheckbox,
    SaCheckboxGroup,
    SaCheckboxButton,
    SaBadge,
    SaBreadcrumb,
    SaCarousel,
    SaCarouselItem,
    SaCollapse,
    SaCollapseItem,
    SaColorPicker,
    SaImage,
    SaEmpty,
    SaDropdown,
    SaDropdownMenu,
    SaDropdownItem,
    SaDrawer,
    SaDivider,
    SaDialog,
    SaDescriptions,
    SaDescriptionItem,
    SaDatePicker,
    SaDatetimePicker,
    SaMain,
    SaMenu,
    SaMenuItem,
    SaPageHeader,
    SaPagination,
    SaPopconfirm,
    SaPopover,
    SaProgress,
    SaRate,
    SaResult,
    SaSkeleton,
    SaSkeletonItem,
    SaSlider,
    SaStatistic,
    SaStep,
    SaSteps,
    SaSubmenu,
    SaSwitch,
    SaTabPane,
    SaTabs,
    SaTag,
    SaTimeline,
    SaTimelineItem,
    SaTimePicker,
    SaTimeSelect,
    SaTooltip,
    SaTransfer,
    SaTree,
    SaUpload,
    SaAvatar,
    SaBacktop,
    SaOption,
    SaOptionGroup,
  ]
  const icons = [
    'platform-eleme',
    'eleme',
    'delete-solid',
    'delete',
    's-tools',
    'setting',
    'user-solid',
    'user',
    'phone',
    'phone-outline',
    'more',
    'more-outline',
    'star-on',
    'star-off',
    's-goods',
    'goods',
    'warning',
    'warning-outline',
    'question',
    'info',
    'remove',
    'circle-plus',
    'success',
    'error',
    'zoom-in',
    'zoom-out',
    'remove-outline',
    'circle-plus-outline',
    'circle-check',
    'circle-close',
    's-help',
    'help',
    'minus',
    'plus',
    'check',
    'close',
    'picture',
    'picture-outline',
    'picture-outline-round',
    'upload',
    'upload2',
    'download',
    'camera-solid',
    'camera',
    'video-camera-solid',
    'video-camera',
    'message-solid',
    'bell',
    's-cooperation',
    's-order',
    's-platform',
    's-fold',
    's-unfold',
    's-operation',
    's-promotion',
    's-home',
    's-release',
    's-ticket',
    's-management',
    's-open',
    's-shop',
    's-marketing',
    's-flag',
    's-comment',
    's-finance',
    's-claim',
    's-custom',
    's-opportunity',
    's-data',
    's-check',
    's-grid',
    'menu',
    'share',
    'd-caret',
    'caret-left',
    'caret-right',
    'caret-bottom',
    'caret-top',
    'bottom-left',
    'bottom-right',
    'back',
    'right',
    'bottom',
    'top',
    'top-left',
    'top-right',
    'arrow-left',
    'arrow-right',
    'arrow-down',
    'arrow-up',
    'd-arrow-left',
    'd-arrow-right',
    'video-pause',
    'video-play',
    'refresh',
    'refresh-right',
    'refresh-left',
    'finished',
    'sort',
    'sort-up',
    'sort-down',
    'rank',
    'loading',
    'view',
    'c-scale-to-original',
    'date',
    'edit',
    'edit-outline',
    'folder',
    'folder-opened',
    'folder-add',
    'folder-remove',
    'folder-delete',
    'folder-checked',
    'tickets',
    'document-remove',
    'document-delete',
    'document-copy',
    'document-checked',
    'document',
    'document-add',
    'printer',
    'paperclip',
    'takeaway-box',
    'search',
    'monitor',
    'attract',
    'mobile',
    'scissors',
    'umbrella',
    'headset',
    'brush',
    'mouse',
    'coordinate',
    'magic-stick',
    'reading',
    'data-line',
    'data-board',
    'pie-chart',
    'data-analysis',
    'collection-tag',
    'film',
    'suitcase',
    'suitcase-1',
    'receiving',
    'collection',
    'files',
    'notebook-1',
    'notebook-2',
    'toilet-paper',
    'office-building',
    'school',
    'table-lamp',
    'house',
    'no-smoking',
    'smoking',
    'shopping-cart-full',
    'shopping-cart-1',
    'shopping-cart-2',
    'shopping-bag-1',
    'shopping-bag-2',
    'sold-out',
    'sell',
    'present',
    'box',
    'bank-card',
    'money',
    'coin',
    'wallet',
    'discount',
    'price-tag',
    'news',
    'guide',
    'male',
    'female',
    'thumb',
    'cpu',
    'link',
    'connection',
    'open',
    'turn-off',
    'set-up',
    'chat-round',
    'chat-line-round',
    'chat-square',
    'chat-dot-round',
    'chat-dot-square',
    'chat-line-square',
    'message',
    'postcard',
    'position',
    'turn-off-microphone',
    'microphone',
    'close-notification',
    'bangzhu',
    'time',
    'odometer',
    'crop',
    'aim',
    'switch-button',
    'full-screen',
    'copy-document',
    'mic',
    'stopwatch',
    'medal-1',
    'medal',
    'trophy',
    'trophy-1',
    'first-aid-kit',
    'discover',
    'place',
    'location',
    'location-outline',
    'location-information',
    'add-location',
    'delete-location',
    'map-location',
    'alarm-clock',
    'timer',
    'watch-1',
    'watch',
    'lock',
    'unlock',
    'key',
    'service',
    'mobile-phone',
    'bicycle',
    'truck',
    'ship',
    'basketball',
    'football',
    'soccer',
    'baseball',
    'wind-power',
    'light-rain',
    'lightning',
    'heavy-rain',
    'sunrise',
    'sunrise-1',
    'sunset',
    'sunny',
    'cloudy',
    'partly-cloudy',
    'cloudy-and-sunny',
    'moon',
    'moon-night',
    'dish',
    'dish-1',
    'food',
    'chicken',
    'fork-spoon',
    'knife-fork',
    'burger',
    'tableware',
    'sugar',
    'dessert',
    'ice-cream',
    'hot-water',
    'water-cup',
    'coffee-cup',
    'cold-drink',
    'goblet',
    'goblet-full',
    'goblet-square',
    'goblet-square-full',
    'refrigerator',
    'grape',
    'watermelon',
    'cherry',
    'apple',
    'pear',
    'orange',
    'coffee',
    'ice-tea',
    'ice-drink',
    'milk-tea',
    'potato-strips',
    'lollipop',
    'ice-cream-square',
    'ice-cream-round',
  ]

  return propsReducer('sand-ui', map, 'sa', { prefix: 'sa-icon', type: 'sandUi', icons }, extensionContext)
}

export function elementUi2Components() {
  const isZh = getLocale().includes('zh')

  const map = isZh
    ? [
        [
          SaRow,
          '行布局',
          '<sa-row></sa-row>',
        ],
        [
          SaCol,
          '列布局',
          '<sa-col></sa-col>',
        ],
        [
          SaContainer,
          '布局容器',
          '<sa-container></sa-container>',
        ],
        [
          SaHeader,
          '顶栏容器',
          '<sa-header></sa-header>',
        ],
        [
          SaAside,
          '侧边栏容器',
          '<sa-aside></sa-aside>',
        ],
        [
          'el-main',
          '主要区域容器',
          '<sa-main></sa-main>',
        ],
        [
          SaFooter,
          '底栏容器',
          '<sa-footer></sa-footer>',
        ],
        [
          SaButton,
          '按钮',
          '<sa-button></sa-button>',
        ],
        [
          SaButtonGroup,
          '按钮组',
          '<sa-button-group></sa-button-group>',
        ],
        [
          SaLink,
          '文字链接',
          '<sa-link></sa-link>',
        ],
        [
          SaRadio,
          '单选框',
          '<sa-radio></sa-radio>',
        ],
        [
          SaRadioGroup,
          '单选框组',
          '<sa-radio-group></sa-radio-group>',
        ],
        [
          SaRadioButton,
          '按钮样式的单选组合',
          '<sa-radio-button></sa-radio-button>',
        ],
        [
          SaCheckbox,
          '多选框',
          '<sa-checkbox></sa-checkbox>',
        ],
        [
          SaCheckboxGroup,
          '多选框组',
          '<sa-checkbox-group></sa-checkbox-group>',
        ],
        [
          SaCheckboxButton,
          '按钮样式的多选组合',
          '<sa-checkbox-button></sa-checkbox-button>',
        ],
        [
          SaInput,
          '输入框',
          '<sa-input></sa-input>',
        ],
        [
          SaInputNumber,
          '计数器',
          '<sa-input-number></sa-input-number>',
        ],
        [
          SaSelect,
          '选择器',
          '<sa-select></sa-select>',
        ],
        [
          SaOption,
          '基础多选',
          '<sa-option></sa-option>',
        ],
        [
          SaOptionGroup,
          '备选项进行分组展示',
          '<sa-option-group></sa-option-group>',
        ],
        [
          SaCascader,
          '级联选择器',
          '<sa-cascader></sa-cascader>',
        ],
        [
          SaCascaderPanel,
          '级联面板',
          '<sa-cascader-panel></sa-cascader-panel>',
        ],
        [
          SaSwitch,
          '开关',
          '<sa-switch></sa-switch>',
        ],
        [
          SaSlider,
          '滑块',
          '<sa-slider></sa-slider>',
        ],
        [
          SaTimeSelect,
          '时间选择器',
          '<sa-time-select></sa-time-select>',
        ],
        [
          SaDatePicker,
          '日期选择器/日期时间选择器',
          '<sa-date-picker></sa-date-picker>',
        ],
        [
          SaUpload,
          '上传',
          '<sa-upload></sa-upload>',
        ],
        [
          SaRate,
          '评分',
          '<sa-rate></sa-rate>',
        ],
        [
          SaColorPicker,
          '颜色选择器',
          '<sa-color-picker></sa-color-picker>',
        ],
        [
          SaTransfer,
          '穿梭框',
          '<sa-transfer></sa-transfer>',
        ],
        [
          SaForm,
          '表单',
          '<sa-form></sa-form>',
        ],
        [
          SaFormItem,
          '表单项',
          '<sa-form-item></sa-form-item>',
        ],
        [
          SaTable,
          '表格',
          '<sa-table></sa-table>',
        ],
        [
          SaTableColumn,
          '表格项',
          '<sa-table-column></sa-table-column>',
        ],
        [
          SaTag,
          '标签',
          '<sa-tag></sa-tag>',
        ],
        [
          SaProgress,
          '进度条',
          '<sa-progress></sa-progress>',
        ],
        [
          SaTree,
          '树形控件',
          '<sa-tree></sa-tree>',
        ],
        [
          SaPagination,
          '分页',
          '<sa-pagination></sa-pagination>',
        ],
        [
          SaBadge,
          '标记',
          '<sa-badge></sa-badge>',
        ],
        [
          SaAvatar,
          '头像',
          '<sa-avatar></sa-avatar>',
        ],
        [
          SaSkeleton,
          '骨架屏',
          '<sa-skeleton></sa-skeleton>',
        ],
        [
          SaEmpty,
          '空状态',
          '<sa-empty></sa-empty>',
        ],
        [
          SaDescriptions,
          '描述列表',
          '<sa-descriptions></sa-descriptions>',
        ],
        [
          SaDescriptionItem,
          '描述列表',
          '<sa-description-item></sa-description-item>',
        ],
        [
          'el-descriptions-item',
          '描述列表项',
          '<sa-descriptions-item></sa-descriptions-item>',
        ],
        [
          SaResult,
          '结果',
          '<sa-result></sa-result>',
        ],
        [
          SaStatistic,
          '统计数值',
          '<sa-statistic></sa-statistic>',
        ],
        [
          SaAlert,
          '警告',
          '<sa-alert></sa-alert>',
        ],

        [
          SaMain,
          '主要区域容器',
          '<sa-main></sa-main>',
        ],
        [
          SaMenu,
          '导航菜单',
          '<sa-menu></sa-menu>',
        ],
        [
          SaSubmenu,
          '导航子菜单',
          '<sa-submenu></sa-submenu>',
        ],
        [
          SaMenuItem,
          '导航菜单项',
          '<sa-menu-item></sa-menu-item>',
        ],
        [
          SaTabs,
          '标签页',
          '<sa-tabs></sa-tabs>',
        ],
        [
          SaTabPane,
          '标签项',
          '<sa-tab-pane></sa-tab-pane>',
        ],
        [
          SaBreadcrumb,
          '面包屑',
          '<sa-breadcrumb></sa-breadcrumb>',
        ],
        [
          'el-breadcrumb-item',
          '面包屑项',
          '<sa-breadcrumb-item></sa-breadcrumb-item>',
        ],
        [
          SaPageHeader,
          '页头',
          '<sa-page-header></sa-page-header>',
        ],
        [
          SaDropdown,
          '下拉菜单',
          '<sa-dropdown></sa-dropdown>',
        ],
        [
          SaDropdownMenu,
          '下拉菜单列表',
          '<sa-dropdown-menu></sa-dropdown-menu>',
        ],
        [
          SaDropdownItem,
          '下拉菜单列表项',
          '<sa-dropdown-item></sa-dropdown-item>',
        ],
        [
          SaSteps,
          '步骤条',
          '<sa-steps></sa-steps>',
        ],
        [
          SaDialog,
          '对话框',
          '<sa-dialog></sa-dialog>',
        ],
        [
          SaTooltip,
          '文字提示',
          '<sa-tooltip></sa-tooltip>',
        ],
        [
          SaPopover,
          '弹出框',
          '<sa-popover></sa-popover>',
        ],
        [
          SaPopconfirm,
          '气泡确认框',
          '<sa-popconfirm></sa-popconfirm>',
        ],
        [
          SaCard,
          '卡片',
          '<sa-card></sa-card>',
        ],
        [
          SaCarousel,
          '走马灯',
          '<sa-carousel></sa-carousel>',
        ],
        [
          SaCarouselItem,
          '走马灯项',
          '<sa-carousel-item></sa-carousel-item>',
        ],
        [
          SaCollapse,
          '折叠面板',
          '<sa-collapse></sa-collapse>',
        ],
        [
          SaCollapseItem,
          '折叠面板项',
          '<sa-collapse-item></sa-collapse-item>',
        ],
        [
          SaTimeline,
          '时间线',
          '<sa-timeline></sa-timeline>',
        ],
        [
          SaTimelineItem,
          '时间线项',
          '<sa-timeline-item></sa-timeline-item>',
        ],
        [
          SaDivider,
          '分割线',
          '<sa-divider></sa-divider>',
        ],
        [
          SaCalendar,
          '日历',
          '<sa-calendar></sa-calendar>',
        ],
        [
          SaImage,
          '图片',
          '<sa-image></sa-image>',
        ],
        [
          SaBacktop,
          '回到顶部',
          '<sa-backtop></sa-backtop>',
        ],
        [
          SaDrawer,
          '抽屉',
          '<sa-drawer></sa-drawer>',
        ],
        [
          SaAutocomplete,
          '远程搜索',
          '<sa-autocomplete></sa-autocomplete>',
        ],
      ]
    : [
        [
          SaRow,
          'Row layout',
          '<sa-row></sa-row>',
        ],
        [
          SaCol,
          'Column layout',
          '<sa-col></sa-col>',
        ],
        [
          SaContainer,
          'Layout container',
          '<sa-container></sa-container>',
        ],
        [
          SaHeader,
          'Top bar container',
          '<sa-header></sa-header>',
        ],
        [
          SaAside,
          'Sidebar container',
          '<sa-aside></sa-aside>',
        ],
        [
          'el-main',
          'Main area container',
          '<sa-main></sa-main>',
        ],
        [
          SaFooter,
          'Bottom column container',
          '<sa-footer></sa-footer>',
        ],
        [
          SaButton,
          'button',
          '<sa-button></sa-button>',
        ],
        [
          SaButtonGroup,
          'button group',
          '<sa-button-group></sa-button-group>',
        ],
        [
          SaLink,
          'Text link',
          '<sa-link></sa-link>',
        ],
        [
          SaRadio,
          'Single box',
          '<sa-radio></sa-radio>',
        ],
        [
          SaRadioGroup,
          'Radio button group',
          '<sa-radio-group></sa-radio-group>',
        ],
        [
          SaRadioButton,
          'Radio combination of button styles',
          '<sa-radio-button></sa-radio-button>',
        ],
        [
          SaCheckbox,
          'Checkbox',
          '<sa-checkbox></sa-checkbox>',
        ],
        [
          SaCheckboxGroup,
          'Multiple selection box group',
          '<sa-checkbox-group></sa-checkbox-group>',
        ],
        [
          SaCheckboxButton,
          'Multi-select combination of button styles',
          '<sa-checkbox-button></sa-checkbox-button>',
        ],
        [
          SaInput,
          'Input box',
          '<sa-input></sa-input>',
        ],
        [
          SaInputNumber,
          'counter',
          '<sa-input-number></sa-input-number>',
        ],
        [
          SaSelect,
          'Selector',
          '<sa-select></sa-select>',
        ],
        [
          SaOption,
          'Basic multiple selection',
          '<sa-option></sa-option>',
        ],
        [
          SaOptionGroup,
          'Alternatives are displayed in groups',
          '<sa-option-group></sa-option-group>',
        ],
        [
          SaCascader,
          'Cascade selector',
          '<sa-cascader></sa-cascader>',
        ],
        [
          SaCascaderPanel,
          'Cascading Panel',
          '<sa-cascader-panel></sa-cascader-panel>',
        ],
        [
          SaSwitch,
          'switch',
          '<sa-switch></sa-switch>',
        ],
        [
          SaSlider,
          'slider',
          '<sa-slider></sa-slider>',
        ],
        [
          SaTimeSelect,
          'Time picker',
          '<sa-time-select></sa-time-select>',
        ],
        [
          SaDatePicker,
          'Date picker/date time picker',
          '<sa-date-picker></sa-date-picker>',
        ],
        [
          SaUpload,
          'Upload',
          '<sa-upload></sa-upload>',
        ],
        [
          SaRate,
          'score',
          '<sa-rate></sa-rate>',
        ],
        [
          SaColorPicker,
          'Color picker',
          '<sa-color-picker></sa-color-picker>',
        ],
        [
          SaTransfer,
          'Shuttle box',
          '<sa-transfer></sa-transfer>',
        ],
        [
          SaForm,
          'form',
          '<sa-form></sa-form>',
        ],
        [
          SaFormItem,
          'Form item',
          '<sa-form-item></sa-form-item>',
        ],
        [
          SaTable,
          'sheet',
          '<sa-table></sa-table>',
        ],
        [
          SaTableColumn,
          'Table item',
          '<sa-table-column></sa-table-column>',
        ],
        [
          SaTag,
          'Label',
          '<sa-tag></sa-tag>',
        ],
        [
          SaProgress,
          'progress bar',
          '<sa-progress></sa-progress>',
        ],
        [
          SaTree,
          'Tree control',
          '<sa-tree></sa-tree>',
        ],
        [
          SaPagination,
          'pagination',
          '<sa-pagination></sa-pagination>',
        ],
        [
          SaBadge,
          'mark',
          '<sa-badge></sa-badge>',
        ],
        [
          SaAvatar,
          'avatar',
          '<sa-avatar></sa-avatar>',
        ],
        [
          SaSkeleton,
          'Skeleton screen',
          '<sa-skeleton></sa-skeleton>',
        ],
        [
          SaEmpty,
          'Empty state',
          '<sa-empty></sa-empty>',
        ],
        [
          SaDescriptions,
          'Description list',
          '<sa-descriptions></sa-descriptions>',
        ],
        [
          SaDropdownItem,
          'Describe list item',
          '<sa-descriptions-item></sa-descriptions-item>',
        ],
        [
          SaResult,
          'result',
          '<sa-result></sa-result>',
        ],
        [
          SaStatistic,
          'statistical value',
          '<sa-statistic></sa-statistic>',
        ],
        [
          SaAlert,
          'warn',
          '<sa-alert></sa-alert>',
        ],
        [
          SaMenu,
          'Navigation menu',
          '<sa-menu></sa-menu>',
        ],
        [
          SaSubmenu,
          'Navigation submenu',
          '<sa-submenu></sa-submenu>',
        ],
        [
          SaMenuItem,
          'Navigation menu item',
          '<sa-menu-item></sa-menu-item>',
        ],
        [
          SaTabs,
          'Bookmark page',
          '<sa-tabs></sa-tabs>',
        ],
        [
          SaTabPane,
          'Tag item',
          '<sa-tab-pane></sa-tab-pane>',
        ],
        [
          SaBreadcrumb,
          'Bread crumbs',
          '<sa-breadcrumb></sa-breadcrumb>',
        ],
        [
          'el-breadcrumb-item',
          'Breadcrumb item',
          '<sa-breadcrumb-item></sa-breadcrumb-item>',
        ],
        [
          SaPageHeader,
          'Header',
          '<sa-page-header></sa-page-header>',
        ],
        [
          SaDropdown,
          'Drop-down menu',
          '<sa-dropdown></sa-dropdown>',
        ],
        [
          SaDropdownMenu,
          'Drop-down menu list',
          '<sa-dropdown-menu></sa-dropdown-menu>',
        ],
        [
          SaDropdownItem,
          'Drop-down menu list item',
          '<sa-dropdown-item></sa-dropdown-item>',
        ],
        [
          SaSteps,
          'step bar',
          '<sa-steps></sa-steps>',
        ],
        [
          SaDialog,
          'Dialog',
          '<sa-dialog></sa-dialog>',
        ],
        [
          SaTooltip,
          'Text prompt',
          '<sa-tooltip></sa-tooltip>',
        ],
        [
          SaPopover,
          'Pop-up box',
          '<sa-popover></sa-popover>',
        ],
        [
          SaPopconfirm,
          'Bubble confirmation box',
          '<sa-popconfirm></sa-popconfirm>',
        ],
        [
          SaCard,
          'card',
          '<sa-card></sa-card>',
        ],
        [
          SaCarousel,
          'Revolving Lantern',
          '<sa-carousel></sa-carousel>',
        ],
        [
          SaCarouselItem,
          'Revolving Lantern',
          '<sa-carousel-item></sa-carousel-item>',
        ],
        [
          SaCollapse,
          'Collapse panel',
          '<sa-collapse></sa-collapse>',
        ],
        [
          SaCollapseItem,
          'Collapse panel item',
          '<sa-collapse-item></sa-collapse-item>',
        ],
        [
          SaTimeline,
          'timeline',
          '<sa-timeline></sa-timeline>',
        ],
        [
          SaTimelineItem,
          'Timeline item',
          '<sa-timeline-item></sa-timeline-item>',
        ],
        [
          SaDivider,
          'Dividing line',
          '<sa-divider></sa-divider>',
        ],
        [
          SaCalendar,
          'calendar',
          '<sa-calendar></sa-calendar>',
        ],
        [
          SaImage,
          'picture',
          '<sa-image></sa-image>',
        ],
        [
          SaBacktop,
          'back to the top',
          '<sa-backtop></sa-backtop>',
        ],
        [
          SaDrawer,
          'drawer',
          '<sa-drawer></sa-drawer>',
        ],
        [
          SaAutocomplete,
          'Remote search',
          '<sa-autocomplete></sa-autocomplete>',
        ],
      ]
  return componentsReducer(map, true, 'sa', 'sand-ui')
}
