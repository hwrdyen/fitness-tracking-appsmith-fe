export default {
	auth: () => {
		return GetUser.run({'id': Input1.text})
			.then(() => {
			console.log(Input2.text)
			if(GetUser.data.password!=Input2.text){
				showAlert('Password Failed', '');
			}
			else{
				showAlert('User Authen Successful');
				storeValue('userID', GetUser.data.id);
				storeValue('isAdmin', GetUser.data.isAdmin);
				navigateTo('Home Page', {})
			}
		})
		.catch(() => {
			showAlert('User Name Does Not Exist', '');
		})
	}
}