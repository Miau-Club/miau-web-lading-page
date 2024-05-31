import br from './messages/br.json';
 
type Messages = typeof br;
 
declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}