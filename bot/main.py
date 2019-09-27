from vk_api.bot_longpoll import VkBotLongPoll, VkBotEventType
import vk_api
from vk_api.utils import get_random_id

vk_session = vk_api.VkApi(token='eb62e8f7492ed46eb6c758daacc6096f559aa4bc3974ee6c2e29538afa39d28ee19233b437cad514fdd4e')
vk = vk_session.get_api()

longpoll = VkBotLongPoll(vk_session, 178266951)

def arr():
    vk.messages.removeChatUser(
        chat_id=2,
        user_id=id
    )




