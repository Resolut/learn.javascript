var user = {};
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete user.name;
for (item in user) {
    console.log(item);
}
