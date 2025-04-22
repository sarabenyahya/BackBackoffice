# Backend du Backoffice - PFE

## Description
Cette application backend gère des données relatives aux employés, départements, contrats, demandes, présences et utilisateurs dans un système de gestion des ressources humaines. Elle utilise **Node.js**, **Express** et une base de données **MongoDB**.

## Fonctionnalités
- Gestion des utilisateurs (création, modification, suppression).
- Suivi des informations des employés.
- Gestion des départements de l'entreprise.
- Gestion des contrats des employés.
- Gestion des demandes (congés, formations, etc.).
- Suivi des présences des employés.

## Collections de la Base de Données
Les données sont organisées dans plusieurs collections MongoDB, qui sont les suivantes :

- **USER** : Contient les informations des utilisateurs (admins, employés, etc.).
- **EMPLOYEE** : Contient les informations des employés (nom, adresse, département, etc.).
- **DEPARTMENT** : Contient les informations sur les départements de l'entreprise.
- **CONTRACT** : Contient les informations sur les contrats des employés.
- **DEMAND** : Contient les demandes faites par les employés (congés, formations, etc.).
- **ATTENDANCE** : Contient les informations sur la présence des employés.
  
### Relations entre les collections

Voici un graphique qui montre comment les différentes collections sont reliées entre elles dans l'application :

```mermaid
flowchart LR
    USER["🟦 <b>USER</b><br>──────────────<br>_id: String<br>username: String<br>email: String<br>password: String<br>role: String<br>createdAt: Date"]
    EMPLOYEE["🟩 <b>EMPLOYEE</b><br>──────────────<br>_id: String<br>firstName: String<br>lastName: String<br>gender: String<br>birthDate: Date<br>phone: String<br>email: String<br>address: String<br>department: String<br>hireDate: Date<br>createdBy: String<br>createdAt: Date"]
    CONTRACT["📄 <b>CONTRACT</b><br>──────────────<br>_id: String<br>employeeId: string<br>fileUrl: String<br>uploadedAt: Date<br>expiresAt: Date<br>createdBy: string<br>salary: number"]
    ATTENDANCE["🟨 <b>ATTENDANCE</b><br>──────────────<br>_id: String<br>employeeId: string<br>date: Date<br>checkIn: Date<br>checkOut: Date<br>status: String"]
    demand["🟧 <b>demand</b><br>──────────────<br>_id: String<br>employeeId: string<br>type: String<br>startDate: Date<br>endDate: Date<br>status: String<br>requestedAt: Date<br>"]
    DEPARTMENT["🟪 <b>DEPARTMENT</b><br>──────────────<br>_id: String<br>name: String<br>description: String<br>managerId: string<br>createdAt: Date"]
    
    %% Relations
    USER -->|creates| EMPLOYEE
    EMPLOYEE -->|has| ATTENDANCE
    EMPLOYEE -->|requests| demand
    USER -->|reviews| demand
    DEPARTMENT -->|includes| EMPLOYEE
    EMPLOYEE -->|has| CONTRACT

    %% Styling
    classDef user fill:#007acc,color:white,stroke:#005f99;
    classDef employee fill:#28a745,color:white,stroke:#1c7d32;
    classDef attendance fill:#ffc107,color:black,stroke:#e0a800;
    classDef leave fill:#fd7e14,color:white,stroke:#dc6c0f;
    classDef department fill:#6f42c1,color:white,stroke:#59359c;
    classDef contract fill:#5bc0de,color:white,stroke:#31b0d5;

    class USER user;
    class EMPLOYEE employee;
    class ATTENDANCE attendance;
    class demand leave;
    class DEPARTMENT department;
    class CONTRACT contract;
