import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {

    Eggs: string;
    Beef: string;
    Chicken: string;
    Rice: string;
    Toast: string;

    isCook = false;
    result: string;
    src: string;
    isPic = false;

    cook() {
      this.isCook = true;
      this.isPic = true;
      if (this.Toast) {
        this.isPic = false;
        this.result = 'Wrong Recipe';
      } else if (this.Eggs && this.Beef) {
        this.result = 'BeefEggs';
        this.src = 'https://tokyo-kitchen.icook.network/uploads/recipe/cover/141595/large_4f1edf51a273843d.jpg';
      } else if (this.Eggs && this.Chicken) {
        this.result = 'ChickenEggs';
        this.src = 'http://pic.pimg.tw/peggykitchen96/1384792022-2141921687.jpg';
      } else if (this.Eggs && this.Rice) {
        this.result = 'FriedEggRices';
        this.src = 'https://tokyo-kitchen.icook.network/uploads/recipe/cover/212305/large_cc546d834fe83f55.jpg';
      } else if (this.Beef && this.Rice) {
        this.result = 'BeefRice';
        this.src = 'https://tokyo-kitchen.icook.network/uploads/recipe/cover/156274/large_2dc0b0784f005876.jpg';
      } else if (this.Chicken && this.Rice) {
        this.result = 'ChickenRice';
        this.src = 'https://tokyo-kitchen.icook.network/uploads/step/cover/1034687/large_f3dac3cd869e9f81.jpg';
      } else {
        this.isPic = false;
        this.result = 'Wrong Recipe';
      }
    }
}

