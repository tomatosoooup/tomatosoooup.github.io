import requests
from .models import TeleSettings
import emoji


def sendTelegram(tg_name, tg_phone, tg_text):
    settings = TeleSettings.objects.get(pk=1)
    token = str(settings.tg_token)
    chat_id = str(settings.tg_chat)
    user_text = str(settings.tg_info)
    api = 'https://api.telegram.org/bot'
    method = api + token + '/sendMessage'
    money = '\U0001F609'
    part_1 = user_text[0:user_text.find('{')]
    part_2 = user_text[user_text.find("}")+1:user_text.rfind('{')]
    part_3 = user_text[user_text.rfind('}'):-1]

    text_slice = part_1 + tg_name + ' ' + '🙋‍♂️' + \
        part_2 + tg_phone + part_3 + ' ' + '💶' + '\n Додатково: ' + tg_text
    req = requests.post(method, data={
        'chat_id': chat_id,
        'text': text_slice,
    })
