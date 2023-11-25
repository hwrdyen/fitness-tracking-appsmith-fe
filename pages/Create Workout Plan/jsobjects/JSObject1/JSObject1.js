export default {
	Visible_Exercise2 () {
		if (Exercise_1.isValid && Duration_1.text!=undefined) {
			Exercise_2.setSelectedOption({ value: undefined })
			Duration_2.setValue(undefined)
			
			Container2.setVisibility(true);
			Exercise_2.setVisibility(true);
			Duration_2.setVisibility(true);
			AddButton_2.setVisibility(true);
			MinusButton_2.setVisibility(true);
		} else {
			showAlert("Select Exercise and Duration before Adding Next One")
		}
	},

	Visible_Exercise3 () {
		if (Exercise_2.isValid && Duration_2.text!=undefined) {
			Container3.setVisibility(true);
			Exercise_3.setVisibility(true);
			Duration_3.setVisibility(true);
			AddButton_3.setVisibility(true);
			MinusButton_3.setVisibility(true);
		} else {
			showAlert("Select Exercise and Duration before Adding Next One")
		}
	},

	Visible_Exercise4 () {
		if (Exercise_3.isValid && Duration_3.text!=undefined) {
			Container4.setVisibility(true);
			Exercise_4.setVisibility(true);
			Duration_4.setVisibility(true);
			AddButton_4.setVisibility(true);
			MinusButton_4.setVisibility(true);
		} else {
			showAlert("Select Exercise and Duration before Adding Next One")
		}
	},

	Visible_Exercise5 () {
		if (Exercise_4.isValid && Duration_4.text!=undefined) {
			Container5.setVisibility(true);
			Duration_5.setVisibility(true);
			Exercise_5.setVisibility(true);
			MinusButton_5.setVisibility(true);
		} else {
			showAlert("Select Exercise and Duration before Adding Next One")
		}
	}
}
