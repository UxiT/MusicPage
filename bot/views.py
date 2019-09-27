from django.shortcuts import render
from django.http import HttpResponse
from vk_api.bot_longpoll import VkBotLongPoll, VkBotEventType
import vk_api
from vk_api.utils import get_random_id

vk_session = vk_api.VkApi(token='eb62e8f7492ed46eb6c758daacc6096f559aa4bc3974ee6c2e29538afa39d28ee19233b437cad514fdd4e')
vk = vk_session.get_api()

longpoll = VkBotLongPoll(vk_session, 178266951)

id = 377687223


def kick(chat_id, user_id):
    vk.messages.removeChatUser(
        chat_id=chat_id,
        user_id=user_id
    )


def send_msg(chat_id, msg):
    vk.messages.send(
        chat_id=chat_id,
        random_id=get_random_id(),
        message=msg
    )


def arr(request):
    if request.GET.get('kick_btn'):
        send_msg(2, ' Вас щас ебанут в живот')
        try:
            kick(2, id)
        except vk_api.ApiError as error:
            print(error)
    return render(request, 'bot/index.html')

