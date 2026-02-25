
npx sequelize-cli model:generate --name Article --attributes id:integer,name:string,slug:string,image:string,body:text,published:date,author_id:integer

npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all


docker exec -it mysql-container mysql -u root -p