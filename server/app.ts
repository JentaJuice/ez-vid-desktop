import express from 'express'
import ezServe from 'ez-serve'
import { Routes } from './src/routes'

const app = express()

export async function Server() {
  Routes(app)
  ezServe(app, 19800)
}
