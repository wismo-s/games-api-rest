from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

User_model = get_user_model()

def customValidation(data):
    username = data['username'].strip()
    email = data['email'].strip()
    password = data['password'].strip()
    
    if not username or User_model.objects.filter(username=username).exists():
        raise ValidationError('Choose another username')
    if not username or User_model.objects.filter(email=email).exists():
        raise ValidationError('Choose another email')
    if not password or len(password) < 8:
        raise ValidationError('Password incorrect')
 
def validateUsername(data):
    username = data['username'].strip()
    if not username:
        raise ValidationError('USERNAME IS NECESSARY!')
    return True

def validatePassword(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('PUT THE PASSWORD!')
    return True
