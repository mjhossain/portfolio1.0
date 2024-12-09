# Stage 1: Build Stage
# Use a specific LTS Node.js version (e.g., 20-alpine or the latest supported version for React)
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies exactly as defined in package-lock.json
RUN npm ci

# Copy the rest of the project files
COPY . .

# Build the Vite project
RUN npm run build

# Stage 2: Production Stage
FROM nginx:latest

# Copy build output from Stage 1 to Nginx
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
