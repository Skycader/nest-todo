(()=>{"use strict";var e={287:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.AppController=void 0;const i=o(481),s=o(772);let d=class{constructor(e){this.appService=e}getHello(){return this.appService.getHello()}};r([(0,i.Get)(),n("design:type",Function),n("design:paramtypes",[]),n("design:returntype",String)],d.prototype,"getHello",null),d=r([(0,i.Controller)(),n("design:paramtypes",[s.AppService])],d),t.AppController=d},215:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.AppModule=void 0;const n=o(481),i=o(399),s=o(287),d=o(772),c=o(175),l=o(748);let a=class{};a=r([(0,n.Module)({imports:[i.TypeOrmModule.forRoot(c.typeOrmConfig),l.TodosModule],controllers:[s.AppController],providers:[d.AppService]})],a),t.AppModule=a},772:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.AppService=void 0;const n=o(481);let i=class{getHello(){return"Hello World!"}};i=r([(0,n.Injectable)()],i),t.AppService=i},175:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.typeOrmConfig=void 0,t.typeOrmConfig={type:"postgres",host:"172.17.0.2",port:5432,username:"bob",password:"bob",database:"bobdb",entities:[__dirname+"/../**/*.entity.ts"],synchronize:!0}},299:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(o,r){t(o,r,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.TodosController=void 0;const s=o(177),d=o(54),c=(o(912),o(481)),l=o(648),a=o(580);let p=class{constructor(e){this.todosService=e}getTodos(e){return 0===Object.keys(e).length?this.todosService.getAllTodos():this.todosService.getTodosWithFilters(e)}getTodoById(e){return this.todosService.getTodoById(e)}addTodo(e){return this.todosService.addTodo(e)}updateTodo(e,t){return this.todosService.updateTodo(e,t)}removeTodo(e){return this.todosService.removeTodo(e)}};r([(0,c.Get)(),i(0,(0,c.Query)(c.ValidationPipe)),n("design:type",Function),n("design:paramtypes",[s.GetTodosFilterDto]),n("design:returntype",Array)],p.prototype,"getTodos",null),r([(0,c.Get)("/:id"),i(0,(0,c.Param)("id")),n("design:type",Function),n("design:paramtypes",[String]),n("design:returntype",void 0)],p.prototype,"getTodoById",null),r([(0,c.Post)(),(0,c.UsePipes)(c.ValidationPipe),i(0,(0,c.Body)()),n("design:type",Function),n("design:paramtypes",[a.AddTodoDto]),n("design:returntype",Object)],p.prototype,"addTodo",null),r([(0,c.Patch)("/:id/status"),i(0,(0,c.Param)("id")),i(1,(0,c.Body)("status",d.StatusValidatorPipe)),n("design:type",Function),n("design:paramtypes",[String,String]),n("design:returntype",void 0)],p.prototype,"updateTodo",null),r([(0,c.Delete)("/:id"),i(0,(0,c.Param)("id")),n("design:type",Function),n("design:paramtypes",[String]),n("design:returntype",void 0)],p.prototype,"removeTodo",null),p=r([(0,c.Controller)("todos"),n("design:paramtypes",[l.TodosService])],p),t.TodosController=p},580:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.AddTodoDto=void 0;const i=o(849);class s{}r([(0,i.IsNotEmpty)(),n("design:type",String)],s.prototype,"title",void 0),r([(0,i.IsNotEmpty)(),n("design:type",String)],s.prototype,"description",void 0),t.AddTodoDto=s},177:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.GetTodosFilterDto=void 0;const i=o(849),s=o(912);class d{}r([(0,i.IsOptional)(),(0,i.IsIn)([s.TodoStatus.OPEN,s.TodoStatus.DONE,s.TodoStatus.IN_PROGRESS]),n("design:type",String)],d.prototype,"status",void 0),r([(0,i.IsOptional)(),(0,i.IsNotEmpty)(),n("design:type",String)],d.prototype,"search",void 0),t.GetTodosFilterDto=d},912:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.TodoStatus=void 0,(o=t.TodoStatus||(t.TodoStatus={})).OPEN="OPEN",o.IN_PROGRESS="IN_PROGRESS",o.DONE="DONE"},54:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.StatusValidatorPipe=void 0;const n=o(481),i=o(912);let s=class{constructor(){this.allowedStatuses=[i.TodoStatus.OPEN,i.TodoStatus.IN_PROGRESS,i.TodoStatus.DONE]}transform(e,t){if(!this.isStatusValid(e))throw new n.BadRequestException(`Got invalid status: ${e}`);return e.toUpperCase()}isStatusValid(e){return this.allowedStatuses.includes(e)}};s=r([(0,n.Injectable)()],s),t.StatusValidatorPipe=s},648:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.TodosService=void 0;const n=o(481),i=o(828),s=o(912);let d=class{constructor(){this.todos=[]}getAllTodos(){return this.todos}getTodosWithFilters(e){const{status:t,search:o}=e;let r=this.getAllTodos();return t&&(r=r.filter((e=>e.status===t))),o&&(r=r.filter((e=>e.title.includes(o)||e.description.includes(o)))),r}getTodoById(e){const t=this.todos.find((t=>t.id==e));if(!t)throw new n.NotFoundException(`Todo with such id ${e} not found`);return t}addTodo(e){const{title:t,description:o}=e,r={id:(0,i.v4)(),title:t,description:o,status:s.TodoStatus.OPEN};return this.todos.push(r),r}updateTodo(e,t){const o=this.getTodoById(e);return o.status=t,o}removeTodo(e){const t=this.getTodoById(e);return this.todos=this.todos.filter((e=>e.id!=t.id)),`Todo by id ${e} has been deleted`}};d=r([(0,n.Injectable)()],d),t.TodosService=d},748:function(e,t,o){var r=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0}),t.TodosModule=void 0;const n=o(481),i=o(299),s=o(648);let d=class{};d=r([(0,n.Module)({controllers:[i.TodosController],providers:[s.TodosService]})],d),t.TodosModule=d},481:e=>{e.exports=require("@nestjs/common")},143:e=>{e.exports=require("@nestjs/core")},399:e=>{e.exports=require("@nestjs/typeorm")},849:e=>{e.exports=require("class-validator")},828:e=>{e.exports=require("uuid")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}(()=>{const e=o(143),t=o(215);!async function(){const o=await e.NestFactory.create(t.AppModule);await o.listen(3e3)}()})()})();
//# sourceMappingURL=main.js.map