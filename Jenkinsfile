pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Test Suite') {
            steps {
                git url: 'https://github.com/martinchichi/cypress-automation-framework.git', branch: 'main'
                bat 'npm install'
                bat 'npm update'
                bat 'npm run triggerAllTests-autoTestStore'
            }         
        }
    }
}