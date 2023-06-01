import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
var AnchorsComponent = /** @class */ (function () {
    function AnchorsComponent() {
        this.categories = [];
        this.icons = {};
        this.anchorClick = new EventEmitter();
    }
    AnchorsComponent.prototype.trackByFn = function (idx, cat) {
        return cat.id;
    };
    AnchorsComponent.prototype.handleClick = function ($event, index) {
        this.anchorClick.emit({
            category: this.categories[index],
            index: index,
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], AnchorsComponent.prototype, "categories", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AnchorsComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AnchorsComponent.prototype, "selected", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AnchorsComponent.prototype, "i18n", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AnchorsComponent.prototype, "icons", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AnchorsComponent.prototype, "anchorClick", void 0);
    AnchorsComponent = tslib_1.__decorate([
        Component({
            selector: 'emoji-mart-anchors',
            template: "\n  <div class=\"emoji-mart-anchors\">\n    <ng-template ngFor let-category [ngForOf]=\"categories\" let-idx=\"index\" [ngForTrackBy]=\"trackByFn\">\n      <span\n        *ngIf=\"category.anchor !== false\"\n        [attr.title]=\"i18n.categories[category.id]\"\n        (click)=\"this.handleClick($event, idx)\"\n        class=\"emoji-mart-anchor\"\n        [class.emoji-mart-anchor-selected]=\"category.name === selected\"\n        [style.color]=\"category.name === selected ? color : null\"\n      >\n        <div>\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n            <path [attr.d]=\"icons[category.id]\" />\n          </svg>\n        </div>\n        <span class=\"emoji-mart-anchor-bar\" [style.background-color]=\"color\"></span>\n      </span>\n    </ng-template>\n  </div>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false
        })
    ], AnchorsComponent);
    return AnchorsComponent;
}());
export { AnchorsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9ycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC8iLCJzb3VyY2VzIjpbImFuY2hvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQThCdkI7SUExQkE7UUEyQlcsZUFBVSxHQUFvQixFQUFFLENBQUM7UUFJakMsVUFBSyxHQUE4QixFQUFFLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBOEMsQ0FBQztJQVd6RixDQUFDO0lBVEMsb0NBQVMsR0FBVCxVQUFVLEdBQVcsRUFBRSxHQUFrQjtRQUN2QyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELHNDQUFXLEdBQVgsVUFBWSxNQUFhLEVBQUUsS0FBYTtRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDaEMsS0FBSyxPQUFBO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWZRO1FBQVIsS0FBSyxFQUFFOzt3REFBa0M7SUFDakM7UUFBUixLQUFLLEVBQUU7O21EQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOztzREFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7O2tEQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7O21EQUF1QztJQUNyQztRQUFULE1BQU0sRUFBRTs7eURBQThFO0lBTjVFLGdCQUFnQjtRQTFCNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsaTFCQW9CVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLG1CQUFtQixFQUFFLEtBQUs7U0FDM0IsQ0FBQztPQUNXLGdCQUFnQixDQWlCNUI7SUFBRCx1QkFBQztDQUFBLEFBakJELElBaUJDO1NBakJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtb2ppQ2F0ZWdvcnkgfSBmcm9tICdAY3RybC9uZ3gtZW1vamktbWFydC9uZ3gtZW1vamknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1tYXJ0LWFuY2hvcnMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1jYXRlZ29yeSBbbmdGb3JPZl09XCJjYXRlZ29yaWVzXCIgbGV0LWlkeD1cImluZGV4XCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5Rm5cIj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwiY2F0ZWdvcnkuYW5jaG9yICE9PSBmYWxzZVwiXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxuICAgICAgICAoY2xpY2spPVwidGhpcy5oYW5kbGVDbGljaygkZXZlbnQsIGlkeClcIlxuICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yXCJcbiAgICAgICAgW2NsYXNzLmVtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkXT1cImNhdGVnb3J5Lm5hbWUgPT09IHNlbGVjdGVkXCJcbiAgICAgICAgW3N0eWxlLmNvbG9yXT1cImNhdGVnb3J5Lm5hbWUgPT09IHNlbGVjdGVkID8gY29sb3IgOiBudWxsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cImljb25zW2NhdGVnb3J5LmlkXVwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCI+PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEFuY2hvcnNDb21wb25lbnQge1xuICBASW5wdXQoKSBjYXRlZ29yaWVzOiBFbW9qaUNhdGVnb3J5W10gPSBbXTtcbiAgQElucHV0KCkgY29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdGVkPzogc3RyaW5nO1xuICBASW5wdXQoKSBpMThuOiBhbnk7XG4gIEBJbnB1dCgpIGljb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIEBPdXRwdXQoKSBhbmNob3JDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8eyBjYXRlZ29yeTogRW1vamlDYXRlZ29yeSwgaW5kZXg6IG51bWJlciB9PigpO1xuXG4gIHRyYWNrQnlGbihpZHg6IG51bWJlciwgY2F0OiBFbW9qaUNhdGVnb3J5KSB7XG4gICAgcmV0dXJuIGNhdC5pZDtcbiAgfVxuICBoYW5kbGVDbGljaygkZXZlbnQ6IEV2ZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5hbmNob3JDbGljay5lbWl0KHtcbiAgICAgIGNhdGVnb3J5OiB0aGlzLmNhdGVnb3JpZXNbaW5kZXhdLFxuICAgICAgaW5kZXgsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==