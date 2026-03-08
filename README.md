
npx sequelize-cli model:generate --name <model_name> --attributes id:integer,name:string,slug:string,image:string,body:text,published:date,author_id:integer

npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

npx sequelize-cli db:seed:all --debug
npx sequelize-cli db:seed:


docker exec -it mysql-container mysql -u root -p