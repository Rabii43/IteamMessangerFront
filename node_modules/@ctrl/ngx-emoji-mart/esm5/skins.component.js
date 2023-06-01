import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
var SkinComponent = /** @class */ (function () {
    function SkinComponent() {
        this.changeSkin = new EventEmitter();
        this.opened = false;
        this.skinTones = [1, 2, 3, 4, 5, 6];
    }
    SkinComponent.prototype.toggleOpen = function () {
        this.opened = !this.opened;
    };
    SkinComponent.prototype.isSelected = function (skinTone) {
        return skinTone === this.skin;
    };
    SkinComponent.prototype.isVisible = function (skinTone) {
        return this.opened || this.isSelected(skinTone);
    };
    SkinComponent.prototype.pressed = function (skinTone) {
        return this.opened ? !!this.isSelected(skinTone) : '';
    };
    SkinComponent.prototype.tabIndex = function (skinTone) {
        return this.isVisible(skinTone) ? '0' : '';
    };
    SkinComponent.prototype.expanded = function (skinTone) {
        return this.isSelected(skinTone) ? this.opened : '';
    };
    SkinComponent.prototype.handleClick = function (skin) {
        if (!this.opened) {
            this.opened = true;
            return;
        }
        this.opened = false;
        if (skin !== this.skin) {
            this.changeSkin.emit(skin);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SkinComponent.prototype, "skin", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SkinComponent.prototype, "i18n", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SkinComponent.prototype, "changeSkin", void 0);
    SkinComponent = tslib_1.__decorate([
        Component({
            selector: 'emoji-skins',
            template: "\n    <section\n      class=\"emoji-mart-skin-swatches\"\n      [class.emoji-mart-skin-swatches-opened]=\"opened\"\n    >\n      <span\n        *ngFor=\"let skinTone of skinTones\"\n        class=\"emoji-mart-skin-swatch\"\n        [class.emoji-mart-skin-swatch-selected]=\"skinTone === skin\"\n      >\n        <span\n          (click)=\"this.handleClick(skinTone)\"\n          (keyup.enter)=\"handleClick(skinTone)\"\n          (keyup.space)=\"handleClick(skinTone)\"\n          class=\"emoji-mart-skin emoji-mart-skin-tone-{{ skinTone }}\"\n          role=\"button\"\n          [tabIndex]=\"tabIndex(skinTone)\"\n          [attr.aria-hidden]=\"!isVisible(skinTone)\"\n          [attr.aria-pressed]=\"pressed(skinTone)\"\n          [attr.aria-haspopup]=\"!!isSelected(skinTone)\"\n          [attr.aria-expanded]=\"expanded(skinTone)\"\n          [attr.aria-label]=\"i18n.skintones[skinTone]\"\n          [title]=\"i18n.skintones[skinTone]\"\n        ></span>\n      </span>\n    </section>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false
        })
    ], SkinComponent);
    return SkinComponent;
}());
export { SkinComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvIiwic291cmNlcyI6WyJza2lucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBb0N2QjtJQWhDQTtRQW9DWSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsRCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsY0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQW9DakMsQ0FBQztJQWxDQyxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxRQUF1QjtRQUNoQyxPQUFPLFFBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsUUFBdUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxRQUF1QjtRQUM3QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxRQUF1QjtRQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsUUFBdUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBdkNRO1FBQVIsS0FBSyxFQUFFOzsrQ0FBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7OytDQUFXO0lBQ1Q7UUFBVCxNQUFNLEVBQUU7O3FEQUF5QztJQUp2QyxhQUFhO1FBaEN6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUscStCQTBCVDtZQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLG1CQUFtQixFQUFFLEtBQUs7U0FDM0IsQ0FBQztPQUNXLGFBQWEsQ0EwQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQTFDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamkgfSBmcm9tICdAY3RybC9uZ3gtZW1vamktbWFydC9uZ3gtZW1vamknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1za2lucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb25cbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1za2luLXN3YXRjaGVzXCJcbiAgICAgIFtjbGFzcy5lbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkXT1cIm9wZW5lZFwiXG4gICAgPlxuICAgICAgPHNwYW5cbiAgICAgICAgKm5nRm9yPVwibGV0IHNraW5Ub25lIG9mIHNraW5Ub25lc1wiXG4gICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1za2luLXN3YXRjaFwiXG4gICAgICAgIFtjbGFzcy5lbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkXT1cInNraW5Ub25lID09PSBza2luXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAoY2xpY2spPVwidGhpcy5oYW5kbGVDbGljayhza2luVG9uZSlcIlxuICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJoYW5kbGVDbGljayhza2luVG9uZSlcIlxuICAgICAgICAgIChrZXl1cC5zcGFjZSk9XCJoYW5kbGVDbGljayhza2luVG9uZSlcIlxuICAgICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLXt7IHNraW5Ub25lIH19XCJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICBbdGFiSW5kZXhdPVwidGFiSW5kZXgoc2tpblRvbmUpXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWhpZGRlbl09XCIhaXNWaXNpYmxlKHNraW5Ub25lKVwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1wcmVzc2VkXT1cInByZXNzZWQoc2tpblRvbmUpXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWhhc3BvcHVwXT1cIiEhaXNTZWxlY3RlZChza2luVG9uZSlcIlxuICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiZXhwYW5kZWQoc2tpblRvbmUpXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImkxOG4uc2tpbnRvbmVzW3NraW5Ub25lXVwiXG4gICAgICAgICAgW3RpdGxlXT1cImkxOG4uc2tpbnRvbmVzW3NraW5Ub25lXVwiXG4gICAgICAgID48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC9zZWN0aW9uPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNraW5Db21wb25lbnQge1xuICAvKiogY3VycmVudGx5IHNlbGVjdGVkIHNraW4gKi9cbiAgQElucHV0KCkgc2tpbj86IEVtb2ppWydza2luJ107XG4gIEBJbnB1dCgpIGkxOG46IGFueTtcbiAgQE91dHB1dCgpIGNoYW5nZVNraW4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgb3BlbmVkID0gZmFsc2U7XG4gIHNraW5Ub25lcyA9IFsxLCAyLCAzLCA0LCA1LCA2XTtcblxuICB0b2dnbGVPcGVuKCkge1xuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICB9XG5cbiAgaXNTZWxlY3RlZChza2luVG9uZTogRW1vamlbJ3NraW4nXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBza2luVG9uZSA9PT0gdGhpcy5za2luO1xuICB9XG5cbiAgaXNWaXNpYmxlKHNraW5Ub25lOiBFbW9qaVsnc2tpbiddKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbmVkIHx8IHRoaXMuaXNTZWxlY3RlZChza2luVG9uZSk7XG4gIH1cblxuICBwcmVzc2VkKHNraW5Ub25lOiBFbW9qaVsnc2tpbiddKSB7XG4gICAgcmV0dXJuIHRoaXMub3BlbmVkID8gISF0aGlzLmlzU2VsZWN0ZWQoc2tpblRvbmUpIDogJyc7XG4gIH1cblxuICB0YWJJbmRleChza2luVG9uZTogRW1vamlbJ3NraW4nXSkge1xuICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZShza2luVG9uZSkgPyAnMCcgOiAnJztcbiAgfVxuXG4gIGV4cGFuZGVkKHNraW5Ub25lOiBFbW9qaVsnc2tpbiddKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZChza2luVG9uZSkgPyB0aGlzLm9wZW5lZCA6ICcnO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soc2tpbjogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIGlmIChza2luICE9PSB0aGlzLnNraW4pIHtcbiAgICAgIHRoaXMuY2hhbmdlU2tpbi5lbWl0KHNraW4pO1xuICAgIH1cbiAgfVxufVxuIl19