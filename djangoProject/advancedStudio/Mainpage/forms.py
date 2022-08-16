from django import forms


class ApplicationForm(forms.Form):
    username = forms.CharField(max_length=20, label='username', widget=forms.TextInput(
        attrs={'class': "col-lg-3 col-md-3 col-tb-3 col-sm-3", 'placeholder': "Ім'я"}))
    user_mail = forms.CharField(max_length=50, label='mail', widget=forms.EmailInput(
        attrs={'class': "col-lg-8 col-md-8 col-tb-8 col-sm-8", 'placeholder': 'Електронна пошта'}))
    user_text = forms.CharField(max_length=400, label='text', widget=forms.Textarea(
        attrs={'cols': "100%", 'rows': "10", 'placeholder': 'Яким би ви хотіли бачити свій сайт ?'}))
