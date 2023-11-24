export default {
	ResetVisibility() {
		Exercise_1.setSelectedOption({ value: undefined })
		Exercise_2.setSelectedOption({ value: undefined })
		Exercise_3.setSelectedOption({ value: undefined })
		Exercise_4.setSelectedOption({ value: undefined })
		Exercise_5.setSelectedOption({ value: undefined })
		
		Duration_1.setValue(undefined)
		Duration_2.setValue(undefined)
		Duration_3.setValue(undefined)
		Duration_4.setValue(undefined)
		Duration_5.setValue(undefined)

		Container2.setVisibility(false);
		Exercise_2.setVisibility(false);
		Duration_2.setVisibility(false);
		AddButton_2.setVisibility(false);
		MinusButton_2.setVisibility(false);

		Container3.setVisibility(false);
		Exercise_3.setVisibility(false);
		Duration_3.setVisibility(false);
		AddButton_3.setVisibility(false);
		MinusButton_3.setVisibility(false);

		Container4.setVisibility(false);
		Exercise_4.setVisibility(false);
		Duration_4.setVisibility(false);
		AddButton_4.setVisibility(false);
		MinusButton_4.setVisibility(false);

		Container5.setVisibility(false);
		Exercise_5.setVisibility(false);
		Duration_5.setVisibility(false);
		MinusButton_5.setVisibility(false);
	}
}