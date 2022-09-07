const arrLang = {
    'en': {
        'about': 'About me',
        'skill': 'Skills',
        'project': 'Projects',
        'contact': 'Contacts',
        'send': 'Send message',
        'name': 'Abdulaeva',
        'name2': 'Madina',
        'special': 'SMM specialist',
        'special2': '20 years old, Makhachkala',
        'subscribe': 'Like me on Instagram, Facebook',
        'popup__greeting': 'Hi my name is Madina I am an smm specialist, if you have any questions, ask and I will answer them, your message will be sent to me on Email',
        'want': 'Want to know more? You are welcome!',
        'work': 'I work in such programs as',
        'greeting1': "Hi I'm Madina-SMM specialist.",
        'greeting2': 'Interested in smm and a little design',
        'greeting3': 'I took a course at',
        'greeting4': 'I will help you in the implementation of ideas, ',
        'greeting5': ' ready for intresting projects',
    },
    'ru': {
        'about': 'Обо мне',
        'skill': 'Умения',
        'project': 'Проекты',
        'contact': 'Контакты',
        'send': 'Отправить сообщение',
        'name': 'Абдулаева',
        'name2': 'Мадина',
        'special': 'СММ специалист',
        'special2': ' 20 лет, Махачкала',
        'subscribe': 'Оцени мой Instagram, Facebook',
        'popup__greeting': 'Привет, меня зовут Мадина, я специалист по smm, если у вас есть какие-либо вопросы, задавайте, и я на них отвечу, ваше сообщение будет отправлено мне на почту',   
        'want': 'Хочешь узнать больше? Добро пожаловать!',
        'work': 'Я работаю в таких программах, как',
        'greeting1': 'Привет я Мадина-СММ специалист',
        'greeting2': 'Интересуюсь смм и немного дизайном',
        'greeting3': 'Я прошла курс в',
        'greeting4': 'Я помогу вам в реализации идей, ',
        'greeting5': 'готова к интересным проектам',
    }
}

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lng').each(function(index, item){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});