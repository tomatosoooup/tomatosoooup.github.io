from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(max_length=200, label='fio', widget=forms.TextInput(
        attrs={'placeholder': "Ваше ім'я та прізвище"}))
    phone = forms.CharField(max_length=200, label='telephone', widget=forms.TextInput(
        attrs={'placeholder': 'Номер телефону'}))
