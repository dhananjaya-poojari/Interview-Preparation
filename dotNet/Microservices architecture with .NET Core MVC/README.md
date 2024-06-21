## Database First Approach
### Scaffold-DbContext
`Scaffold-DbContext` tool from Entity Framework Core to generate model classes from an existing database. This command is part of the EF Core Command-line Tools and is used to perform reverse engineering of a database.

```
Scaffold-DbContext "Server=.\SQLExpress;Database=BookStoresDB;Trusted_connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
```
Once the command is executed, it will generate entity classes and a DbContext class inside the Models directory, reflecting the schema of the BookStoresDB database. These classes can then be used in your application to interact with the database using EF Core.

Here’s a breakdown of the command:

- `Scaffold-DbContext`: This is the command to generate the DbContext and entity classes based on the existing database schema.
- `Server=.\SQLExpress;Database=BookStoresDB;Trusted_connection=True;`: This is the connection string to the SQL Server database. It specifies the server name (SQLExpress), the database name (BookStoresDB), and uses trusted connection (Windows Authentication).
- `Microsoft.EntityFrameworkCore.SqlServer`: This specifies the provider to use, which in this case is SQL Server.
- `-OutputDir Models`: This option specifies the directory where the generated classes will be placed. In this case, they will be placed in a folder named Models.

## Code First Approach
In Entity Framework Core (EF Core), `add-migration` and `update-database` are commands used to manage database schema changes through migrations. Here's what each command does:

### add-migration
The add-migration command is used to scaffold a new migration file based on the changes that have been made to your DbContext and entity classes. A migration file in EF Core is a code-based representation of the changes to the database schema necessary to apply your changes.
```
Add-Migration YourMigrationName
```

### update-database
The update-database command applies pending migrations to the database. When you add a new migration using add-migration, the changes are only reflected in the generated migration file and not in the actual database. update-database is used to execute these pending migrations and update the database schema accordingly.
```
Update-Database
```
