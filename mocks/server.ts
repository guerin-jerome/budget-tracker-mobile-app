import {createServer} from 'miragejs';
import {loginUrl} from '../services/api';
import {loginManagement} from './authentication';

export default function () {
  createServer({
    routes() {
      this.post(loginUrl, loginManagement);
    },
  });
}
