import angular from 'angular';

import config from './config.js';
import controller from './controller.js';
import service from './service.js';

let gallery = angular.module('jk.gallery', []);

gallery.config(config);
gallery.controller("GalleryController", controller);
gallery.service("GalleryService", service);

export default gallery;
