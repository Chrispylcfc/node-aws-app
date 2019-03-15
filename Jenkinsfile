pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS 11.11.0'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
                sh './script/deploy'
            }
        }
    }
}