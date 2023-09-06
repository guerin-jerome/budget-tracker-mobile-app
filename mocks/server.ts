import {createServer} from 'miragejs';
import {loginUrl, registerUrl} from '../services/api';
import {loginManagement, registerManagement} from './authentication';

export default function () {
  createServer({
    routes() {
      this.post(loginUrl, loginManagement);
      this.post(registerUrl, registerManagement);
    },
  });
}
