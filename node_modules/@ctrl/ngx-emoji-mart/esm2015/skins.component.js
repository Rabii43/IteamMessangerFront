import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
let SkinComponent = class SkinComponent {
    constructor() {
        this.changeSkin = new EventEmitter();
        this.opened = false;
        this.skinTones = [1, 2, 3, 4, 5, 6];
    }
    toggleOpen() {
        this.opened = !this.opened;
    }
    isSelected(skinTone) {
        return skinTone === this.skin;
    }
    isVisible(skinTone) {
        return this.opened || this.isSelected(skinTone);
    }
    pressed(skinTone) {
        return this.opened ? !!this.isSelected(skinTone) : '';
    }
    tabIndex(skinTone) {
        return this.isVisible(skinTone) ? '0' : '';
    }
    expanded(skinTone) {
        return this.isSelected(skinTone) ? this.opened : '';
    }
    handleClick(skin) {
        if (!this.opened) {
            this.opened = true;
            return;
        }
        this.opened = false;
        if (skin !== this.skin) {
            this.changeSkin.emit(skin);
        }
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
        template: `
    <section
      class="emoji-mart-skin-swatches"
      [class.emoji-mart-skin-swatches-opened]="opened"
    >
      <span
        *ngFor="let skinTone of skinTones"
        class="emoji-mart-skin-swatch"
        [class.emoji-mart-skin-swatch-selected]="skinTone === skin"
      >
        <span
          (click)="this.handleClick(skinTone)"
          (keyup.enter)="handleClick(skinTone)"
          (keyup.space)="handleClick(skinTone)"
          class="emoji-mart-skin emoji-mart-skin-tone-{{ skinTone }}"
          role="button"
          [tabIndex]="tabIndex(skinTone)"
          [attr.aria-hidden]="!isVisible(skinTone)"
          [attr.aria-pressed]="pressed(skinTone)"
          [attr.aria-haspopup]="!!isSelected(skinTone)"
          [attr.aria-expanded]="expanded(skinTone)"
          [attr.aria-label]="i18n.skintones[skinTone]"
          [title]="i18n.skintones[skinTone]"
        ></span>
      </span>
    </section>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        preserveWhitespaces: false
    })
], SkinComponent);
export { SkinComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvIiwic291cmNlcyI6WyJza2lucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBb0N2QixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBaEMxQjtRQW9DWSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsRCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsY0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQW9DakMsQ0FBQztJQWxDQyxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUF1QjtRQUNoQyxPQUFPLFFBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBdUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELE9BQU8sQ0FBQyxRQUF1QjtRQUM3QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUF1QjtRQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxRQUFRLENBQUMsUUFBdUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXhDVTtJQUFSLEtBQUssRUFBRTs7MkNBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFOzsyQ0FBVztBQUNUO0lBQVQsTUFBTSxFQUFFOztpREFBeUM7QUFKdkMsYUFBYTtJQWhDekIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCVDtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLG1CQUFtQixFQUFFLEtBQUs7S0FDM0IsQ0FBQztHQUNXLGFBQWEsQ0EwQ3pCO1NBMUNZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbW9qaSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLXNraW5zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvblxuICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXNcIlxuICAgICAgW2NsYXNzLmVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWRdPVwib3BlbmVkXCJcbiAgICA+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdGb3I9XCJsZXQgc2tpblRvbmUgb2Ygc2tpblRvbmVzXCJcbiAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoXCJcbiAgICAgICAgW2NsYXNzLmVtb2ppLW1hcnQtc2tpbi1zd2F0Y2gtc2VsZWN0ZWRdPVwic2tpblRvbmUgPT09IHNraW5cIlxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIChjbGljayk9XCJ0aGlzLmhhbmRsZUNsaWNrKHNraW5Ub25lKVwiXG4gICAgICAgICAgKGtleXVwLmVudGVyKT1cImhhbmRsZUNsaWNrKHNraW5Ub25lKVwiXG4gICAgICAgICAgKGtleXVwLnNwYWNlKT1cImhhbmRsZUNsaWNrKHNraW5Ub25lKVwiXG4gICAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUte3sgc2tpblRvbmUgfX1cIlxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIFt0YWJJbmRleF09XCJ0YWJJbmRleChza2luVG9uZSlcIlxuICAgICAgICAgIFthdHRyLmFyaWEtaGlkZGVuXT1cIiFpc1Zpc2libGUoc2tpblRvbmUpXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLXByZXNzZWRdPVwicHJlc3NlZChza2luVG9uZSlcIlxuICAgICAgICAgIFthdHRyLmFyaWEtaGFzcG9wdXBdPVwiISFpc1NlbGVjdGVkKHNraW5Ub25lKVwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJleHBhbmRlZChza2luVG9uZSlcIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiaTE4bi5za2ludG9uZXNbc2tpblRvbmVdXCJcbiAgICAgICAgICBbdGl0bGVdPVwiaTE4bi5za2ludG9uZXNbc2tpblRvbmVdXCJcbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3NlY3Rpb24+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2tpbkNvbXBvbmVudCB7XG4gIC8qKiBjdXJyZW50bHkgc2VsZWN0ZWQgc2tpbiAqL1xuICBASW5wdXQoKSBza2luPzogRW1vamlbJ3NraW4nXTtcbiAgQElucHV0KCkgaTE4bjogYW55O1xuICBAT3V0cHV0KCkgY2hhbmdlU2tpbiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBvcGVuZWQgPSBmYWxzZTtcbiAgc2tpblRvbmVzID0gWzEsIDIsIDMsIDQsIDUsIDZdO1xuXG4gIHRvZ2dsZU9wZW4oKSB7XG4gICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG4gIH1cblxuICBpc1NlbGVjdGVkKHNraW5Ub25lOiBFbW9qaVsnc2tpbiddKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHNraW5Ub25lID09PSB0aGlzLnNraW47XG4gIH1cblxuICBpc1Zpc2libGUoc2tpblRvbmU6IEVtb2ppWydza2luJ10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuZWQgfHwgdGhpcy5pc1NlbGVjdGVkKHNraW5Ub25lKTtcbiAgfVxuXG4gIHByZXNzZWQoc2tpblRvbmU6IEVtb2ppWydza2luJ10pIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuZWQgPyAhIXRoaXMuaXNTZWxlY3RlZChza2luVG9uZSkgOiAnJztcbiAgfVxuXG4gIHRhYkluZGV4KHNraW5Ub25lOiBFbW9qaVsnc2tpbiddKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlKHNraW5Ub25lKSA/ICcwJyA6ICcnO1xuICB9XG5cbiAgZXhwYW5kZWQoc2tpblRvbmU6IEVtb2ppWydza2luJ10pIHtcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkKHNraW5Ub25lKSA/IHRoaXMub3BlbmVkIDogJyc7XG4gIH1cblxuICBoYW5kbGVDbGljayhza2luOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKHNraW4gIT09IHRoaXMuc2tpbikge1xuICAgICAgdGhpcy5jaGFuZ2VTa2luLmVtaXQoc2tpbik7XG4gICAgfVxuICB9XG59XG4iXX0=