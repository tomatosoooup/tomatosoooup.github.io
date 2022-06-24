from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(max_length=200, label='fio_rewiev', widget=forms.TextInput(
        attrs={'placeholder': "Ваше ім'я та прізвище"}))
    phone = forms.CharField(max_length=25, label='telephone', widget=forms.TextInput(
        attrs={'placeholder': 'Номер телефону'}))


class ReviewCommentForm(forms.Form):
    name_rewiev = forms.CharField(max_length=200, label='fio_rewiev', widget=forms.TextInput(
        attrs={'placeholder': "Ваше ім'я та прізвище"}))
    user_text = forms.CharField(max_length=200, label='rewiev_text', widget=forms.Textarea(
        attrs={'placeholder': 'Ваш відгук', 'rows': '15'}))
