import requests
from .models import TeleSettings


def sendTelegram(tg_option, tg_name, tg_mail, tg_text):
    settings = TeleSettings.objects.get(pk=1)
    token = str(settings.tg_token)
    chat_id = str(settings.tg_chat)
    user_text = str(settings.tg_info)
    api = 'https://api.telegram.org/bot'
    method = api + token + '/sendMessage'

    part_1 = user_text[0:user_text.find('{')]
    part_2 = user_text[user_text.find("}")+1:user_text.rfind('{')]
    part_3 = user_text[user_text.rfind('}'):-1]

    text_slice = part_1 + tg_name + 'Послуга: ' + tg_option + '\n' +\
        part_2 + tg_mail + part_3 + '\nДодатково: ' + tg_text
    req = requests.post(method, data={
        'chat_id': chat_id,
        'text': text_slice,
    })
