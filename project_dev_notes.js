// project env:
const flow = ['main', 'onboarding', '/appartment_rent', '/other_rent', '/events', '/government', '/letters', '/other', 'finish'];


const gen_sate = flow_start; 
const state = ['welcome', 'get_first_name', 'get_last_name', 'get_phone', 'get_email', 'change_profile', 'confirmation', 'active_user', 'unsubscrybed', 'admin_talk'];

const appartment_rent_states = ['appartment_rent_rules', 'appartment_address', 'address_details', 'rent_calendar', 'appartment_rent_time', 'time_confirmation', 'appartment_calendar_select_date', 'appartment_calendar_available_slots', 'appartment_rent_confirmation', 'appartment_rent_change', 'go_to_router', 'appartment_rent_cancelation', 'relink_to_other_rent'];

const other_rent_states = ['flow_start', 'rent_registration_relink', 'type_of_goods', 'feed_back', '', '', '', '', '', '', '', '', '', '', '', ];
const events_states_arr = ['flow_start', 'events_category_selection', 'events_announcement', 'events_reporting', 'events_pr', 'events_fundraising', 'events_financing'];
var posible_rent_addresses = ['Шептицьких, 16', "Вишкільний центр у Винниках", "Хоткевича, 16А", "Тютюнників, 25", "Коциловського, 16", "Котляревського, 17", "Житомирська, 12", 'лист-дозвіл'];
const government_states_arr = ['flow_start', 'government_category_selection', 'government_ups', 'government_upu', 'government_upn', 'government_upp', 'government_reporting', 'government_actual_link', 'government_pay_tab', 'government_debts_info'];
const letters_states = ['school_exemption', 'event_order', 'letter_for_appartment', 'camp_order', 'letters_category_selection'];
const other_rent_states = ['flow_start', 'rent_registration_relink', 'type_of_goods', 'feed_back'];

const school_exemption = [
  'school_exemption_school_name',
  'school_exemption_school_director',
  'school_exemption_class_name',
  'school_exemption_child_name',
  'school_exemption_event_name',
  'school_exemption_confirmation',
  'school_exemption_confirmed'
]
//other_rent_states description:
// 1) flow_start -> link + Ознайомився + other rent reg
// 2) vty. type of goods
// 3) wayting for call back -> feedback




msg.apartment_db_time_slots[i][n].slot_status = 'booked'|'';
user_data = {
  state : '',
  flow : '',
  chatId: '',
  first_name: '',
  last_name : '',
  phone_number: '',
  email:''
}

text_messages = [
  'Привіт! Я станичний бот Пласту у Львові',
  "Щоб усі твої запити було простіше обробляти пропоную тобі зареєструватись",
  "Введіть ваше прізвище:",
  "Ваш номер телефону",
  "Поділитись номером",
  "Ваш email:",
  "меню підтвердження бронювання приміщення",
  ""

]


appartment_rent_confirmation