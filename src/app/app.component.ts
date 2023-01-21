import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TourPlannerService } from './service/tour-planner/tour-planner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private plannerService: TourPlannerService,
  ) { }

  tourForm: FormGroup = new FormGroup({
    destination: new FormControl(null, [Validators.required]),
    fromLocation: new FormControl(null, [Validators.required]),
    noOfDays: new FormControl(1, [Validators.required]),
    showLocalRestaurants: new FormControl(false, [Validators.required]),
    showShoppingSites: new FormControl(false, [Validators.required]),
    howToGetThere: new FormControl(false, [Validators.required]),
  })

  isGenerating: boolean = false

  validateForm(): void {
    console.log(this.tourForm.controls);

    if (this.tourForm.invalid) {
      this.tourForm.markAllAsTouched()
      return
    }

    this.createPlan()
  }

  plan: any | null = null

  createPlan(): void {
    this.isGenerating = true

    this.plannerService.createPlan(this.tourForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.plan = response.body.output.text
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log("completed");
        this.isGenerating = false
      }
    })
  }
}
