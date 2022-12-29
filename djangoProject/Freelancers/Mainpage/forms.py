from django import forms

class UserQueryForm(forms.Form):
    username = forms.CharField(max_length=200, label='username', widget=forms.TextInput(
        attrs={'placeholder': "Name", 'class': 'input'}))
    user_email = forms.CharField(max_length=30, label='user_email', widget=forms.TextInput(
        attrs={'placeholder': "Email", 'class': 'input'}))