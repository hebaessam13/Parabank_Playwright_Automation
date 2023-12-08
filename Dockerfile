FROM mcr.microsoft.com/playwright:v1.40.0-jammy
ENV HEADED=false
RUN apt-get update && \
    apt-get install -y xvfb
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npx playwright install 
CMD if [ $HEADED ]; then \ 
    xvfb-run npx playwright test --headed; \
    else \
    npx playwright test; \
    fi