import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }
  p, a {
    color: ${({ theme }) => theme.text}
    line-height: 1.4rem;
  }
  a > h4 {
    color: ${({ theme }) => theme.text}
  }
  .btn-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;
  }
  .nfttunz__navbar {
    border: ${({ theme }) => theme.thick_border}}
  }
  .music__card__wrapper {
    background: ${({ theme }) => theme.card_background}
  }
  .earning__card__wrapper {
    background: ${({ theme }) => theme.card_background}
  }
  .tag__wrapper {
    background: ${({ theme }) => theme.card_background}
  }
  .tag__wrapper > button > strong {
    color: ${({ theme }) => theme.text}
  }
  .play__button > a {
    color: ${({ theme }) => theme.text}
  }
  .music__card__artiste > a {
    color: ${({ theme }) => theme.text}
  }
  .nfttunz__avatar__wrapper {
    background: ${({ theme }) => theme.nav_circles};
    color: ${({ theme }) => theme.text};
  }
  .nfttunz__notification__wrapper {
    background: ${({ theme }) => theme.nav_circles};
    color: ${({ theme }) => theme.text};
  }
  .nfttunz__notification__wrapper > button {
    background: transparent;
  }
  .nfttunz__notification__wrapper > button > i {
    color: ${({ theme }) => theme.text};
  }
  .nfttunz__notification__wrapper > a > i {
    color: ${({ theme }) => theme.text};
  }
  .nfttunz__navbar__search__wrapper {
    background-color: ${({ theme }) => theme.search_input}
  }
  .nfttunz__login__button {
    background-color: ${({ theme }) => theme.search_input}
  }
  .nfttunz__login__button button {
    background-color: ${({ theme }) => theme.search_input};
    color: ${({ theme }) => theme.text}!important;
  }
  .nfttunz__filter__select, .nfttunz__select {
    background-color: ${({ theme }) => theme.search_input};
    color: ${({ theme }) => theme.placeholder_text}!important;
  }
  .nfttunz__filter__select:focus, .nfttunz__select:focus {
    background-color: ${({ theme }) => theme.search_input};
    color: ${({ theme }) => theme.text}!important;
  }
  .double__input__row input,
  .steps__input {
    background-color: ${({ theme }) => theme.search_input};
    color: ${({ theme }) => theme.text}!important;
  }
  .arrow__wrapper {
    background-color: ${({ theme }) => theme.card_background};
  }
  .table {
    color: ${({ theme }) => theme.text}!important;
  }
  .nfttunz__profile__link > a {
    color: ${({ theme }) => theme.text}!important;
  }
  .nfttunz__profile__link > a:hover {
    color: ${({ theme }) => theme.alternative_text}!important;
  }
  .nfttunz__profile__link > a:active {
    color: ${({ theme }) => theme.alternative_text}!important;
  }
  .preview__card {
    background-color: ${({ theme }) => theme.card_background};
  }
  .wallet__card__wrapper, .register__card__wrapper {
    background-color: ${({ theme }) => theme.card_background};
  }
  .mint__form__wrapper {
    background-color: ${({ theme }) => theme.card_background};
  }
  .nfttunz__file__wrapper {
    background-color: ${({ theme }) => theme.card_background};
  }
  .nfttunz__textarea {
    background-color: ${({ theme }) => theme.card_background};
    color: ${({ theme }) => theme.text};
  }
  .rhap_container {
    background-color: ${({ theme }) => theme.card_background}
  }
  .rhap_time {
    color: ${({ theme }) => theme.placeholder_text}
  }
  .audio__thumbnail {
    border-top: ${({ theme }) => theme.player_border};
  }
  .footer__social__icons a  i {
    color: ${({ theme }) => theme.footer_text}
  }
  .footer__social__links a {
    color: ${({ theme }) => theme.footer_text}
  }
  .footer__wrapper p {
    background-color: ${({ theme }) => theme.footer_background};
    color: ${({ theme }) => theme.text};
  }
  .nfttunz__loader__wrapper {
    background-color: transparent!important;
  }
  .market__info {
    background-color: ${({ theme }) => theme.footer_background}!important;
    color: ${({ theme }) => theme.text}!important;
  }
  .market__info__link {
    color: ${({ theme }) => theme.alternative_text}!important;
  }
  .nfttunz__profile__link button {
    color: ${({ theme }) => theme.text}!important;
  }
  .nfttunz__profile__link .active__link {
    background-color: ${({ theme }) => theme.card_background}!important;
    color: ${({ theme }) => theme.alternative_text}!important;
  }
  .nfttunz__profile__link button:hover {
    color: ${({ theme }) => theme.alternative_text}!important;
    cursor: pointer;
  }
  .nfttunz__card {
    background-color: ${({ theme }) => theme.card_background}!important;
  }
  .modal-header-bg {
    background-color: ${({ theme }) => theme.card_background}!important
    padding: 5px;
  }
  .modal-header .player-modal {
    background: transparent!important;
    color: ${({ theme }) => theme.text}!important;
    font-size: 8px;
  }
  .modal-header {
    padding: 2px 8px!important;
  }
  .music__card__editions__wrapper {
    background-color: ${({ theme }) => theme.body}!important;
    border-top: 2px solid ${({ theme }) => theme.footer_background};
    border-right: 1px solid ${({ theme }) => theme.footer_background};
    box-shadow: 0 3px 5px 0 rgb(0 0 0 / 8%);
  }
  .notification__overflow {
    background: ${({ theme }) => theme.card_background};
    color: ${({ theme }) => theme.text}!important;
  }
  button.mark-as-read-button {
    color: ${({ theme }) => theme.alternative_text}!important;
  }
  .side-menu, .admin-dashboard-card {
    background: ${({ theme }) => theme.card_background};
    color: ${({ theme }) => theme.text}!important;
  }
  .admin__report__card {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}!important;
  }
  .side-menu-links > li {
    border-bottom: 1px solid ${({ theme }) => theme.text}!important;
  }
  .bg__white {
    background: ${({ theme }) => theme.body};
  }
  .custom__modal__background {
    background: ${({ theme }) => theme.card_background};
    color: ${({ theme }) => theme.text}!important;
  }
  .custom__modal__background input {
    background: ${({ theme }) => theme.search_input};
  }
  input:focus-visible {
  background-color: transparent;
  color: ${({ theme }) => theme.text}
  }
  button:focus {
    box-shadow: none!important;
  }
  .register__fee {
    color: ${({ theme }) => theme.register_info_text}
  }
  .register__support__email {
    color: ${({ theme }) => theme.register_info_text}
  }
`;

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  placeholder_text: '#121212',
  primary: '#6200ee',
  card_background: 'transparent',
  thick_border: '8px solid #eee',
  player_border: '4px solid transparent',
  nav_circles: '#eeeeee',
  search_input: '#eeeeee',
  footer_text: '#121212',
  footer_background: '#eeecec',
  alternative_text: '#CC5914',
  register_info_text: '#121212',
};

export const darkTheme = {
  body: '#000000',
  text: '#fff',
  placeholder_text: '#3f3f3f',
  primary: '#bb86fc',
  card_background: '#121212',
  thick_border: '8px solid #121212',
  player_border: '4px solid transparent',
  nav_circles: '#121212',
  search_input: '#121212',
  footer_text: '#1D2127',
  footer_background: '#121212',
  alternative_text: 'wheat',
  register_info_text: 'rgba(255, 255, 0, 0.459);',
};
