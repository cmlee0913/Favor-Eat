FROM adoptopenjdk/openjdk11 AS builder
VOLUME /tmp
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew bootJAR

FROM adoptopenjdk/openjdk11
COPY --from=builder build/libs/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar","-Dspring.profiles.active=${SPRING_PROFILES_ACTIVE}", "/app.jar"]